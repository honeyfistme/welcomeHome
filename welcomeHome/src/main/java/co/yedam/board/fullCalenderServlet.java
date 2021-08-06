package co.yedam.board;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/fullCalenderServlet")
public class fullCalenderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public fullCalenderServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");

		Gson gson = new GsonBuilder().create();
		PrintWriter out = response.getWriter();
		String cmd = request.getParameter("cmd");

		if (cmd == null) {

		} else if (cmd.equals("select")){
			List<HashMap<String, Object>> list = fullCalenderDAO.getInstance().select();

			out.print(gson.toJson(list));
			
		} else if (cmd.equals("insert")) {

			String title = request.getParameter("title");
			String start = request.getParameter("start");
			String end = request.getParameter("end");
			fullCalender fulCal = new fullCalender();
			fulCal.setTitle(title);
			fulCal.setStart(start);
			fulCal.setEnd(end);

			HashMap<String, Object> map = fullCalenderDAO.getInstance().insert(fulCal);
			out.print(gson.toJson(map));
			
		} else if (cmd.equals("delete")) {
			String title = request.getParameter("title");
			HashMap<String, Object> del = fullCalenderDAO.getInstance().delete(title);

			out.print(gson.toJson(del));
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
