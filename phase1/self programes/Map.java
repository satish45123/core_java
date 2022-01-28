package PROGRAMS;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
public class Map {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap<Integer, String> map = new HashMap<>();

		map.put(1, " Prasanthi");
		map.put(2, " Bellary ");
		map.put(3, " chay");
		
		Set<Entry<Integer, String>> data = map.entrySet();

		Iterator<Entry<Integer,String>> itr = data.iterator();

		while (itr.hasNext()) {
			Entry<Integer,String> entry =  itr.next();
			System.out.println(entry.getKey() + " " + entry.getValue());
		}
	}

}