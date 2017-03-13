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
 * Created by cody.good on 2/20/2017.
 */


@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {

    private Pattern firstNameValidationPattern;
    private Pattern lastNameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;

    public NameListEdit() {
        // --- Compile and set up all the regular expression patterns here ---
        firstNameValidationPattern = Pattern.compile("^[A-Za-z ,.'-]+$");
        lastNameValidationPattern = Pattern.compile("^[A-Za-z ,.'-]+$");
        emailValidationPattern = Pattern.compile("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
        phoneValidationPattern = Pattern.compile("^\\d{3}-\\d{3}-\\d{4}$");
        birthdayValidationPattern = Pattern.compile("^\\d{4}-\\d{2}-\\d{2}$");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        out.println("Post");

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        boolean validation = true;

        Matcher firstNameMatch = firstNameValidationPattern.matcher(firstName);
        if (firstNameMatch.find( )) {
            out.println("FirstName: Passed validation");
        } else {
            validation = false;
            out.println("FirstName: Did not pass validation");
        }

        Matcher lastNameMatch = lastNameValidationPattern.matcher(lastName);
        if (lastNameMatch.find( )) {
            out.println("LastName: Passed validation");
        } else {

            out.println("LastName: Did not pass validation");
        }

        Matcher emailMatch = emailValidationPattern.matcher(email);
        if (emailMatch.find( )) {
            out.println("Email: Passed validation");
        } else {
            validation = false;
            out.println("Email: Did not pass validation");
        }

        Matcher phoneMatch = phoneValidationPattern.matcher(phone);
        if (phoneMatch.find( )) {
            out.println("Phone: Passed validation");
        } else {
            validation = false;
            out.println("Phone: Did not pass validation");
        }

        Matcher birthdayMatch = birthdayValidationPattern.matcher(birthday);
        if (birthdayMatch.find( )) {
            out.println("Birthday: Passed validation");
        } else {
            validation = false;
            out.println("Birthday: Did not pass validation");
        }

        if (validation == true) {
            out.println("Success");

            out.println("firstName= '"+firstName+"'");
            out.println("lastName= '"+lastName+"'");
            out.println("email= '"+email+"'");
            out.println("phone= '"+phone+"'");
            out.println("birthday= '"+birthday+"'");

            phone = phone.replace("-","");

            Person person = new Person();
            person.setFirst(firstName);
            person.setLast(lastName);
            person.setEmail(email);
            person.setPhone(phone);
            person.setBirthday(birthday);

            PersonDAO.updatePerson(person);

        } else {
            out.println("Error");
        }
    }

}

