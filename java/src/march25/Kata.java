package march25;
import java.util.Arrays;

public class Kata {

    public static String isSortedAndHow(int[] array) {
        /*
        给定一个数组, 元素为整形, 判断是否是升序或是降序或是其他
         */
        int[] a = Arrays.copyOf(array, array.length);
        Arrays.sort(a);

        // 由于如果使用 Arrays.sort(array, Collections.reverseOrder());
        // 该方法第一个参数必须是 Object 类型, int 为 基本类型, 更好的做法是先升序以后再 reverse

        int[] b = Arrays.copyOf(array, array.length);
        Arrays.sort(b);

        for (int i = 0; i < b.length / 2; i++) {
            int temp = b[i];
            b[i] = b[b.length - i - 1];
            b[b.length - i - 1] = temp;
        }

        if (Arrays.equals(a, array)) {
            return "yes, ascending";
        } else if (Arrays.equals(b, array)) {
            return "yes, descending";
        } else {
            return "no";
        }
    }
}
