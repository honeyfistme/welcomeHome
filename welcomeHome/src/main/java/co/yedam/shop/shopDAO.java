package co.yedam.shop;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.DAO;

public class shopDAO extends DAO{
	public Item getItemNo(String no) {
		connect();
		Item item = null;
		try {
			pstmt = conn.prepareStatement("select * from shop where item_no = ?");
			pstmt.setString(1, no);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				item = new Item();
				item.setItemNo(rs.getString("item_no"));
				item.setItemName(rs.getString("item_name"));
				item.setItemDesc(rs.getString("item_desc"));
				item.setLikeIt(rs.getDouble("like_it"));
				item.setPrice(rs.getDouble("price"));
				item.setPriceOff(rs.getDouble("price_off"));
				item.setImage(rs.getString("image"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return item;
		
	}
	public List<Item> getItemList(){
		List<Item> list = new ArrayList<>();
		
		connect();
		try {
			pstmt = conn.prepareStatement("select * from shop");
			rs = pstmt.executeQuery();//불어오기
			while(rs.next()) {
				Item item = new Item();
				item.setItemNo(rs.getString("item_no"));
				item.setItemName(rs.getString("item_name"));
				item.setItemDesc(rs.getString("item_desc"));
				item.setLikeIt(rs.getDouble("like_it"));
				item.setPrice(rs.getDouble("price"));
				item.setPriceOff(rs.getDouble("price_off"));
				item.setImage(rs.getString("image"));
				
				list.add(item);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return list;
		
	}
}
