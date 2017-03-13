package simpson.cis.codygood.javafiles;

import com.google.gson.Gson;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.List;

/**
 * Created by cody.good on 3/2/2017.
 */

@WebServlet(name = "NameListDelete")
public class NameListDelete extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        out.println("Post");

        String id = request.getParameter("id");

        out.println("id= '"+id+"'");

        Person person = new Person();
        person.setId(Integer.parseInt(request.getParameter("id")));
        PersonDAO.deletePerson(person);
    }
}
