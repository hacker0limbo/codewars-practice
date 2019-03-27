package march25;

import junit.runner.Version;
import org.junit.*;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;


public class KataTest {

    @Before
    public void setUp() {
        //
    }

    @After
    public void tearDown() {
        //
    }

    @BeforeClass
    public static void setUpClass() {
        System.out.println("JUnit version is: " + Version.id());
    }


    @AfterClass
    public static void tearDownClass() {
        //
    }

    @Test
    public void testIsSortedAndHow() {
        int[] array1 = new int[] {1, 2};
        int[] array2 = new int[] {3, 2};
        int[] array3 = new int[] {4, 2, 30};

        Assert.assertEquals("yes, ascending", Kata.isSortedAndHow(array1));
        Assert.assertEquals("yes, descending", Kata.isSortedAndHow(array2));
        Assert.assertEquals("no", Kata.isSortedAndHow(array3));
    }

    @Test
    public void testOddOrEven() {
        int[] array1 = new int[] {2, 5, 34, 6};
        int[] array2 = new int[] {2};
        int[] array3 = new int[0];

        Assert.assertEquals("odd", Kata.oddOrEven(array1));
        Assert.assertEquals("even", Kata.oddOrEven(array2));
        Assert.assertEquals("even", Kata.oddOrEven(array3));

    }

    @Test
    public void testMyLanguages() {
        final Map<String, Integer> map1 = new HashMap<>();
        map1.put("Java", 10);
        map1.put("Ruby", 80);
        map1.put("Python", 65);
        Assert.assertEquals(Arrays.asList("Ruby", "Python"), Kata.myLanguages(map1));

        final Map<String, Integer> map2 = new HashMap<>();
        map2.put("Hindi", 60);
        map2.put("Dutch", 93);
        map2.put("Greek", 71);
        Assert.assertEquals(Arrays.asList("Dutch", "Greek", "Hindi"), Kata.myLanguages(map2));

        final Map<String, Integer> map3 = new HashMap<>();
        map3.put("C++", 50);
        map3.put("ASM", 10);
        map3.put("Haskell", 20);
        Assert.assertEquals(Collections.emptyList(), Kata.myLanguages(map3));
    }
}
