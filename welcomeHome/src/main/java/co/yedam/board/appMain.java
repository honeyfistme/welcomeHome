package co.yedam.board;

public class appMain {
	public static void main(String[] args) {
		CommentDAO dao = CommentDAO.getInstance();
		dao.selectAll();
	}
}
