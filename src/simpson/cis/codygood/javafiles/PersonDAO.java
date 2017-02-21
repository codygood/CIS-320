package simpson.cis.codygood.javafiles;

/**
 * Created by cody.good on 1/29/2017.
 */

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.List;
import java.util.LinkedList;
import java.sql.PreparedStatement;


public class PersonDAO {
    private final static Logger log = Logger.getLogger(PersonDAO.class.getName());


    public static void updatePerson(Person person) {
        log.log(Level.FINE, "Update person");


        Connection conn = null;
        PreparedStatement stmt = null;



        try {
            conn = DBHelper.getConnection();

            String sql = "INSERT INTO person (first, last, email, phone, birthday) VALUES (?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);


            stmt.setString(1, "first");
            stmt.setString(2, "last");
            stmt.setString(3, "email");
            stmt.setString(4, "phone");
            stmt.setString(5, "birthday");

            stmt.executeUpdate();


        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        } finally {
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }

    }




    public static List<Person> getPeople() {
        log.log(Level.FINE, "Get people");

        List<Person> list = new LinkedList<Person>();

        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;


        try {
            conn = DBHelper.getConnection();

            String sql = "SELECT id, first, last, email, phone, birthday FROM cis320.person";

            stmt = conn.prepareStatement(sql);

            rs = stmt.executeQuery();

            while(rs.next()) {

                Person person = new Person();

                person.setId(rs.getInt("id"));
                person.setFirst(rs.getString("first"));
                person.setLast(rs.getString("last"));
                person.setEmail(rs.getString("email"));
                person.setPhone(rs.getString("phone"));
                person.setBirthday(rs.getString("birthday"));

                list.add(person);
            }
        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        } finally {
            try { rs.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
        return list;
    }

}