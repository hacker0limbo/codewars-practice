package march28;

import java.util.Arrays;
import java.util.Comparator;

public class Kata {

    public static int minSum(int[] passed) {
        /*
        给定一个数组, 计算数组中两个数字乘积的和
         */
        int result = 0;
        int[] array = Arrays.stream(passed).sorted().toArray();
        for (int i = 0; i < array.length / 2 ; i++) {
            result += array[i] * array[array.length - i - 1];
        }
        return result;
    }

    public static long maxProduct(int[] numbers, int sub_size) {
        /*
        给定一个数组, 和一个数字, 根据数字返回数组中乘积最大的结果
         */
        int result = 1;
        // 使用 .boxed 类型进行包装, 成为引用类型, 可以使用 Collectors
        Integer[] array = Arrays.stream(numbers).boxed()
                .sorted(Comparator.reverseOrder())
                .toArray(Integer[]::new);
        for (int i = 0; i < sub_size; i++) {
            result *= array[i];
        }
        return result;
    }

    public static String encryptThis(String text) {
        /*
        给定一个字符串, 进行加密, 规则如下:

        1, 第一个单词转为小写以后转为 ascii 码
        2, 第二个字符和最后一个字符交换位置
         */
        String result = "";
        String[] array = text.split(" ");
        for (String word: array) {
            result += encryptWord(word) + " ";
        }
        return result.trim();
    }

    public static String encryptWord(String word) {
        /*
        将给定的单词进行加密
         */

        String result = "";
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (i == 0) {
                int n = (int) c;
                result += String.valueOf(n);
            } else if (i == 1) {
                result += word.charAt(word.length()-1);
            } else if (i == word.length()-1) {
                result += word.charAt(1);
            } else {
                result += c;
            }
        }
        return result;
    }

    public static double findUniq(double arr[]) {
        int l = arr.length;
        double[] sorted = Arrays.stream(arr).sorted().toArray();
        if (sorted[0] != sorted[1] && sorted[1] == sorted[2]) {
            return sorted[0];
        }
        return sorted[l-1];
    }
}
