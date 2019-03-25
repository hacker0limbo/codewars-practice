package march25;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class KataTest {

    @Before
    public void setUp() throws Exception {
        //
    }

    @After
    public void tearDown() throws Exception {
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
}
