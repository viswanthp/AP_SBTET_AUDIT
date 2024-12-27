using System.Web.Mvc;

namespace SBTETAP.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return RedirectPermanent("index.html");
        }
    }
}
