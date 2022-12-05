 using Microsoft.AspNetCore.Mvc;
using carpenterhiring.Models;
namespace carpenterhiring.Controllers;
[ApiController]
[Route("api/carpenter")]
public class UserController:ControllerBase
{
    private readonly CarpenterHiringContext DB;
    public UserController(CarpenterHiringContext db) 
    {
        this.DB=db;
    }
    
    
    [HttpPost("Insertcarpenter")]
    public object Insertlcarpenter(User usobj)

    {
        string message="";
        try
        {
            CarpenterDatum cap=new CarpenterDatum();
            if(cap.Id==0)
            {
               
                cap.EmailId=usobj.capemailid;
                cap.UserName=usobj.capUsername;
                cap.Password=usobj.cappassword;
                cap.ServiceName=usobj.capservicename;
                cap.ServiceHours=usobj.capservicehours;
                cap.ServiceDate=usobj.capservicedate;
                cap.ServicePrice=usobj.capserviceprice;
                cap.ServiceName=usobj.capservicename;
                cap.ContactNumber=usobj.capcontactnumber;
               DB.CarpenterData.Add(cap);      
            //Add
            //save it in the database
            //DB.SaveChanges();
            int result=this.DB.SaveChanges();
            if(result>0)
            {

            message="user added sucessfully";

        }
        else{
            message="failed";

        }
        return Ok(message);
        DB.SaveChanges();
        return new Response{status="sucessfully",message="employee added!"};
            }}
            catch(System.Exception)
            {
                throw;
            }
return new Response{status="error",message="invalid informatin"};
            
            }

    
    

    
              
    [HttpPost("Login")]
public IActionResult Logincheck(Login logobj)
{
    
    var logindetail=DB.CarpenterData.Where(x=>x.EmailId.Equals(logobj.logemailid)&&x.Password.Equals(logobj.logPassword));
    if(logindetail==null)
    
    {
    return Ok(new Response{status="Not valid",message="Invalid Credential"});
}
else
{
    return Ok(new Response{status="success",message="Welcome user"});
}
}

[HttpGet("GetAllcarpenter")]
    public IQueryable<CarpenterDatum> GetAllcarpenter()
    {
        try
        {
            return DB.CarpenterData;

        }
        catch(System.Exception)
        {
            throw;
        }
}

 [HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this.DB.CarpenterData.FirstOrDefault(o=>o.Id==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.DB.CarpenterData.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.DB.CarpenterData.Remove(user);
            int result = this.DB.SaveChanges();
            if (result > 0)
            {
                message = " UserData deleled sucessfully ";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }

    //     [HttpPost("InsertUserDetails")]
    // public IActionResult CreateUser(CarpenterDatum newuser)
    // {
    //         string message = ""; 
    //             try
    //             {
    //                 this.DB.CarpenterData.Add(newuser);
    //                 int result = this.DB.SaveChanges();
    //                 if (result > 0)
    //                 {
    //                     message = "User has been sucessfully added";
    //                 }
    //                 else
    //                 {
    //                     message = "failed";
    //                 }
    //             }
    //             catch (Exception)
    //             {
    //                 throw;
    //             }
        
    //         return Ok(message);
            
    // }
       

    

}
 