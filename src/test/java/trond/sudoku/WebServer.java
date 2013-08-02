package trond.sudoku;

import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.webapp.WebAppContext;

public class WebServer {

	public static void main(String[] args) throws Exception {
		org.eclipse.jetty.server.Server server = new org.eclipse.jetty.server.Server(8081);
		ContextHandler  contextHandler = new ContextHandler();
		contextHandler.setInitParameter("useFileMappedBuffer", "false");
		contextHandler.setHandler(new WebAppContext("src/main/webapp", "/"));
		server.setHandler(contextHandler);
		server.start();
		
		
	}	

}
