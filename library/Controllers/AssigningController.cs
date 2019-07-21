using library.Core.BindingModels;
using library.Core.Dtos;
using library.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace library.Controllers
{
    [RoutePrefix("api/assigning")]
    public class AssigningController : ApiController
    {
        private readonly IAssigningRepository _assignRepository;

        public AssigningController(IAssigningRepository assignRepository)
        {
            _assignRepository = assignRepository;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            return NotFound();
        }


        [Route("~/api/client/{clientId:int}/assigning")]
        [HttpGet]
        public async Task<IEnumerable<Assigning>> GetAssignmentByClient(int clientId)
        {
            return await _assignRepository.GetAssignmentByClientId(clientId);
        }


        [HttpPost]
        public async Task<IHttpActionResult> Assign([FromBody]AssignDto assignDto)
        {
            if (assignDto != null)
            {
                foreach (var bookId in assignDto.BooksId)
                {
                    var assign = new Assigning
                    {
                        BookId = bookId,
                        ClientId = assignDto.ClientId,
                        OrderDate = assignDto.OrderDate,
                        ReturnDate = assignDto.ReturnDate
                    };

                    await _assignRepository.Assign(assign);
                }
            }
            else
            {
                return BadRequest();
            }

            return Ok();
        }

        // PUT: api/Assigning/5
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpPut]
        public async Task<IHttpActionResult> Unassign([FromBody] RemoveAssiningBindingModel model)
        {
            var assignment = await _assignRepository.GetAssignment(model.ClientId, model.BookId);

            if (assignment == null)
            {
                return NotFound();
            }

            assignment.WasRetruned = DateTime.Now;
            try
            {
                await _assignRepository.Unassign(assignment);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }
    }
}
