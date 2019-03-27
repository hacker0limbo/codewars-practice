package march25;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Collections;

public class Kata {

    public static String isSortedAndHow(int[] array) {
        /*
        给定一个数组, 元素为整形, 判断是否是升序或是降序或是其他
         */
        int[] a = Arrays.copyOf(array, array.length);
        Arrays.sort(a);

        // 由于如果使用 Arrays.sort(array, Collections.reverseOrder());
        // 该方法第一个参数必须是 Object 类型, int 为 基本类型, 更好的做法是先升序以后再 reverse

        int[] b = reversedArray(array);

        if (Arrays.equals(a, array)) {
            return "yes, ascending";
        } else if (Arrays.equals(b, array)) {
            return "yes, descending";
        } else {
            return "no";
        }
    }

    public static int[] reversedArray(int[] array) {
        /*
        将数组里面的元素翻转
         */
        int[] b = Arrays.copyOf(array, array.length);
        Arrays.sort(b);

        for (int i = 0; i < b.length / 2; i++) {
            int temp = b[i];
            b[i] = b[b.length - i - 1];
            b[b.length - i - 1] = temp;
        }
        return b;
    }

    public static String oddOrEven(int[] array) {
        /*
        给定一个数组, 里面为整型, 计算他们的和是否是 even 或者 odd
        空数组考虑为 [0]
         */
        int sum = Arrays.stream(array).sum();
        if (sum % 2 == 0) {
            return "even";
        } else {
            return "odd";
        }
    }

    public static List<String> myLanguages(final Map<String, Integer> results) {
        /*
        给定一个 map, 筛选出 值大于 60 的语言, 并且按照降序排列
         */
        List<String> languages = new ArrayList<String>();
        results.entrySet().stream()
            .sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
            .forEach(m -> {
                // 转为 stream 以后降序排序, 再筛选大于 60 的
                String k = m.getKey();
                Integer v = m.getValue();
                if (v >= 60) {
                    languages.add(k);
                }
            });
        return languages;
    }
}
