using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using todolist_backend.Models;

namespace todolist_backend.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly TodoContext _context;

        public TodoController(TodoContext context)
        {
            _context = context;
        } 
        
        // GET api/todo
        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return _context.TodoList.ToList();
        }

        // GET api/todo/5
        [HttpGet("{id}", Name = "GetTodo")]
        public IActionResult GetById(int id)
        {
            var item = _context.TodoList.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        // POST api/todo
        [HttpPost]
        public IActionResult Post([FromBody]Todo add)
        {
            if (add == null){
                return BadRequest();
            }

            _context.TodoList.Add(add);
            _context.SaveChanges();

            return CreatedAtRoute("GetTodo", new { id = add.Id }, add);
        }

        // PUT api/todo/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Todo update)
        {
            if (update == null || update.Id != id){
                return BadRequest();
            }

            var todo = _context.TodoList.FirstOrDefault(x => x.Id == id);
            if (todo == null){
                return NotFound();
            }

            todo.Text = update.Text;
            todo.Edit = update.Edit;
            todo.EditText = update.EditText;

            _context.TodoList.Update(todo);
            _context.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/todo/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _context.TodoList.FirstOrDefault(x => x.Id == id);
            if (todo == null){
                return NotFound();
            }

            _context.TodoList.Remove(todo);
            _context.SaveChanges();
            return new NoContentResult();
        }
    }
}