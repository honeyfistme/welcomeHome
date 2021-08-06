package co.yedam.board;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class fullCalenderDAO extends DAO{
	private static fullCalenderDAO instance;
	
	private fullCalenderDAO() {
		
	}
	
	public static fullCalenderDAO getInstance() {
		instance = new fullCalenderDAO();
		return instance;
	}
	//일정조회
	public List<HashMap<String, Object>> select(){
		connect();
		List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
		String sql = "select * from schedule";
				try {
					pstmt = conn.prepareStatement(sql);
					rs = pstmt.executeQuery();
					while (rs.next()) {
						HashMap<String, Object> map = new HashMap<>();
						map.put("title", rs.getString("title"));
						map.put("start", rs.getString("start"));
						map.put("end", rs.getString("end"));
						list.add(map);
					}					
				} catch (SQLException e) {
					e.printStackTrace();
				}finally{
					disconnect();
				}
				return list;
	}
	//일정추가
	public HashMap<String, Object> insert(fullCalender fulCal){
		connect();
		String sql = "insert into schedule values(?,?,?)";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, fulCal.getTitle());
			pstmt.setString(2, fulCal.getStart());
			pstmt.setString(3, fulCal.getEnd());
			int r = pstmt.executeUpdate();
			System.out.println("입력: "+ r);
			
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("title", fulCal.getTitle());
			map.put("start", fulCal.getStart());
			map.put("end", fulCal.getEnd());
			
			return map;
			
		} catch (SQLException e) {
			e.printStackTrace();
			
		}finally {
			disconnect();
		}
		return null;
	}
	//삭제
	public HashMap<String, Object> delete(String title) {
		connect();
		String sql = "delete from schedule where title = ?";
		HashMap<String, Object> map = new HashMap<String, Object>();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, title);
			int r = pstmt.executeUpdate();
			System.out.println("삭제: "+ r);
			map.put("title", title);
			
			return map;
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return null;
	}

}
