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

@WebServlet("/CommentServlet")
public class CommentServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public CommentServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/xml;charset=utf-8");
		response.setCharacterEncoding("utf-8");

		PrintWriter out = response.getWriter();
		String cmd = request.getParameter("cmd");

		if (cmd == null) {
			StringBuffer sb = new StringBuffer();
			sb.append("<result>");
			sb.append("<code>error</code>");
			sb.append("<data>");
			sb.append("cmd null");
			sb.append("</data>");
			sb.append("</result>");
			out.print(sb.toString());

		} else if (cmd.equals("selectAll")) {// 목록보기
			try {
				List<HashMap<String, Object>> list = CommentDAO.getInstance().selectAll();
				StringBuffer sb = new StringBuffer();
				sb.append("<result>");
				sb.append("<code>success</code>");
				sb.append("<data>");

				for (HashMap<String, Object> map : list) {
					sb.append("<row>");
					sb.append("  <id>" + map.get("id") + "</id>");
					sb.append("  <name>" + map.get("name") + "</name>");
					sb.append("  <content>" + map.get("content") + "</content>");
					sb.append("</row>");
				}
				sb.append("</data>");
				sb.append("</result>");
				System.out.println(sb.toString());
				out.print(sb.toString());

			} catch (Exception e) {
				out.println(errorXML(e.getMessage()));

			}
		} else if (cmd.equals("insert")) {// 한건입력
			try {
				String name = request.getParameter("name");
				String content = request.getParameter("content");
				Comment comment = new Comment();
				comment.setName(name);
				comment.setContent(content);
				HashMap<String, Object> map = //
						CommentDAO.getInstance().insert(comment);

				out.println(dataXML(map));

			} catch (Exception e) {// 오류가 나면 오류출력
				out.println(errorXML(e.getMessage()));
			}
		} else if (cmd.equals("upDate")) {
			String id = request.getParameter("id");
			String name = request.getParameter("name");
			String content = request.getParameter("content");

			Comment comment = new Comment();
			comment.setId(id);
			comment.setName(name);
			comment.setContent(content);

			HashMap<String, Object> map = //
					CommentDAO.getInstance().upDate(comment);
			out.println(dataXML(map));
		} else if (cmd.equals("delete")) {
			
		}
	}// end of doGet();

	protected String errorXML(String msg) {
		StringBuffer sb = new StringBuffer();
		sb.append("<result>");
		sb.append("<code>error</code>");
		sb.append("<data>" + msg + "</data>");
		sb.append("</result>");

		return sb.toString();

	}

	protected String dataXML(HashMap<String, Object> map) {
		StringBuffer sb = new StringBuffer();
		sb.append("<result>");
		sb.append("<code>success</code>");
		sb.append("<data>");
		sb.append("  <id>" + map.get("id") + "</id>");
		sb.append("  <name>" + map.get("name") + "</name>");
		sb.append("  <content>" + map.get("content") + "</content>");
		sb.append("</data>");
		sb.append("</result>");
		return sb.toString();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
