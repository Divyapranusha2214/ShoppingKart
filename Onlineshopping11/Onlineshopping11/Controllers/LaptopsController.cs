using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OnlineShopping11.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Onlineshopping11.Models.ProductDBContext;

namespace Onlineshopping11.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class LaptopsController : ControllerBase
    {
        private readonly ProductDbContext _context;

        public int LaptopId { get; private set; }

        public LaptopsController(ProductDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Laptops>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Laptops>> GetLaptop(int id)
        {
            var Laptop = await _context.Products.FindAsync(id);

            if (Laptop == null)
            {
                return NotFound();
            }

            return Laptop;
        }


        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLaptops(int id, Laptops laptops)
        {
            if (id != LaptopId)
            {
                return BadRequest();
            }

            _context.Entry(laptops).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LaptopExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult<Laptops>> PostLaptop(Laptops laptop)
        {
           
                _context.Add(laptop);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetLaptop", new { id = laptop.Id }, laptop);
            
            
        }




        [HttpDelete("{id}")]
        public async Task<ActionResult<Laptops>> DeleteLaptop(int id, ProductDbContext _context)
        {
            var laptops = await _context.Products.FindAsync(id);
            if (laptops == null)
            {
                return NotFound();
            }

            _context.Products.Remove(laptops);
            await _context.SaveChangesAsync();

            return laptops;
        }

        private bool LaptopExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}



