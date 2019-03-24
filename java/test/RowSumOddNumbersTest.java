import march24.RowSumOddNumbers;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class RowSumOddNumbersTest {

    @Before
    public void setUp() throws Exception {
        //
    }

    @After
    public void tearDown() throws Exception {
        //
    }

    @Test
    public void testRowSumOddNumbers() {
        Assert.assertEquals(1, RowSumOddNumbers.rowSumOddNumbers(1));
        Assert.assertEquals(8, RowSumOddNumbers.rowSumOddNumbers(2));
        Assert.assertEquals(74088, RowSumOddNumbers.rowSumOddNumbers(42));
    }
}
