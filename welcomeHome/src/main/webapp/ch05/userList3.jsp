<%@page import="co.yedam.UserVO"%>
<%@page import="java.util.List"%>
<%@page import="co.yedam.UserDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>userList.jsp</title>
</head>
<body>
	<%
		UserDAO dao = new UserDAO();
		List<UserVO> list = dao.getUsers();
		//id, name, gen, hobby,birth
	%>
	<table border= '1'>
	<%		
		for(UserVO vo : list){
	%>
		<tr><td><%= vo.getUserName() %></td>
		    <td><%= vo.getUserHobby() %></td>
		    <td><input type= date><%= vo.getUserBirth() %></td>
		</tr>
	<%	
		}
	%>
	</table>

</body>
</html>