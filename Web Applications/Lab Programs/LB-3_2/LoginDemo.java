package p1;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author y21cs164
 */
public class LoginDemo extends HttpServlet {

   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
      String name=request.getParameter("username");
      String pwd=request.getParameter("pass");
      if(name.equalsIgnoreCase("y21cs164")&&pwd.equalsIgnoreCase("cs"))
          out.println("Login Succeusfull "+name);
      else
          out.println("Login Unsucceusfull "+name);
	  out.close();
   }
}