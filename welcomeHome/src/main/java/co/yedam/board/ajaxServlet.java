package co.yedam.board;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


@WebServlet("/ajaxServlet")
public class ajaxServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ajaxServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("test/json;charset=utf-8");
		List<HashMap<String,Object>>list =CommentDAO.getInstance().selectAll();
		
		JsonArray outAry = new JsonArray();
		for(int i=0; i<list.size(); i++) {
			HashMap<String,Object> map = list.get(i);
			JsonArray inAry = new JsonArray();
			inAry.add((String)map.get("id"));
			inAry.add((String)map.get("name"));
			inAry.add((String)map.get("content"));
			
			outAry.add(inAry);
			JsonObject obj = new JsonObject();
			obj.add("data", inAry);
			System.out.print(obj);
		}//[[1],[2],[3].....[end]]
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
