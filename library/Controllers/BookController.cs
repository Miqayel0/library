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
    [RoutePrefix("api/book")]
    public class BookController : ApiController
    {
        private readonly IBookRepository _bookRepository;

        public BookController(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }


        public async Task<IEnumerable<Book>> Get()
        {
            return await _bookRepository.GetAll();
        }

        [Route("{query}")]
        public async Task<IEnumerable<Book>> Get(string query)
        {
            return await _bookRepository.GetAll(query);
        }

        // GET: api/Book/5
        [Route("{id:int}")]
        [ResponseType(typeof(Book))]
        [HttpGet]
        public async Task<IHttpActionResult> Get(int id)
        {
            try
            {
                var book = await _bookRepository.GetById(id);

                if (book != null)
                {
                    return Ok(book);
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
        public async Task<IHttpActionResult> Post([FromBody]Book book)
        {
            try
            {
                return Ok(await _bookRepository.Create(book));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/Book/5
        [Route("{id:int}")]
        [ResponseType(typeof(Book))]
        [HttpPut]
        public async Task<IHttpActionResult> Put([FromBody]Book book)
        {
            try
            {
                var modifiedBook = await _bookRepository.Update(book);
                if (modifiedBook != null)
                {
                    return Ok(modifiedBook);
                }
                else return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/Book/5
        [HttpDelete]
        public async Task<IHttpActionResult> Delete(int id)
        {
            try
            {
                await _bookRepository.Delete(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
