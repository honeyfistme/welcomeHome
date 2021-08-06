package co.yedam.board;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/fullCalenderservlet2")
public class fullCalenderservlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public fullCalenderservlet2() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		
		response.setContentType("text/json;charset=utf-8");
		String title = request.getParameter("title");
		String start = request.getParameter("start");
		String end = request.getParameter("end");
		fullCalender fulCal = new fullCalender();
		fulCal.setTitle(title);
		fulCal.setStart(start);
		fulCal.setEnd(end);
		
		HashMap<String, Object> map = fullCalenderDAO.getInstance().insert(fulCal);
		StringBuffer sb = new StringBuffer();
		sb.append("<result>");
		sb.append("<code>error</code>");
		sb.append("<data>" + map + "</data>");
		sb.append("</result>");
		
		out.println(sb);
		}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
