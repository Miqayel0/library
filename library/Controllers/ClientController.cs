using library.Core.Dtos;
using library.Core.Models;
using library.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace library.Controllers
{
    [RoutePrefix("api/client")]
    public class ClientController : ApiController
    {
        private readonly IClientRepository _clientRepository;

        public ClientController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        
        public async Task<IEnumerable<Client>> Get()
        {
            var clients = await _clientRepository.GetAll();

            return clients;
        }

        [Route("{query}")]
        public async Task<IEnumerable<Client>> Get(string query)
        {
            var clients = await _clientRepository.GetAll(query);

            return clients;
        }


        // GET: api/Client/5
        [Route("{id:int}")]
        [ResponseType(typeof(Client))]
        [HttpGet]
        public async Task<IHttpActionResult> Get(int id)
        {
            try
            {
                var client = await _clientRepository.GetById(id);

                if (client != null)
                {
                    return Ok(client);
                }
                else
                {
                    return NotFound();
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            };

        }

        [HttpPost]
        public async Task<IHttpActionResult> Post([FromBody]Client client)
        {
            try
            {
                return Ok(await _clientRepository.Create(client));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/Client/5
        [Route("{id:int}")]
        [ResponseType(typeof(Client))]
        [HttpPut]
        public async Task<IHttpActionResult> Put([FromBody]Client client)
        {
            try
            {
                var modifiedClient = await _clientRepository.Update(client);
                if (modifiedClient != null)
                {
                    return Ok(modifiedClient);
                }
                else return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/Client/5
        [HttpDelete]
        public async Task<IHttpActionResult> Delete(int id)
        {
            try
            {
                await _clientRepository.Delete(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
