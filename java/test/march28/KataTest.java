package march28;
import junit.runner.Version;
import org.junit.*;


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
    public void testMinSum() {
        Assert.assertEquals(22, Kata.minSum(new int[]{5,4,2,3}));
        Assert.assertEquals(342, Kata.minSum(new int[]{12,6,10,26,3,24}));
        Assert.assertEquals(74, Kata.minSum(new int[]{9,2,8,7,5,4,0,6}));
    }

    @Test
    public void testMaxProduct() {
        Assert.assertEquals(20, Kata.maxProduct(new int[]{4,3,5}, 2));
        Assert.assertEquals(720, Kata.maxProduct(new int[]{10,8,7,9}, 3));
        Assert.assertEquals(288, Kata.maxProduct(new int[]{8,6,4,6}, 3));
        Assert.assertEquals(9600, Kata.maxProduct(new int[]{10,2,3,8,1,10,4}, 5));
        Assert.assertEquals(247895375, Kata.maxProduct(new int[]{13,12,-27,-302,25,37,133,155,-14}, 5));
        Assert.assertEquals(4, Kata.maxProduct(new int[]{-4,-27,-15,-6,-1}, 2));
        Assert.assertEquals(136, Kata.maxProduct(new int[]{-17,-8,-102,-309}, 2));
        Assert.assertEquals(-30, Kata.maxProduct(new int[]{10,3,-27,-1}, 3));
        Assert.assertEquals(-253344, Kata.maxProduct(new int[]{14,29,-28,39,-16,-48}, 4));

    }

    @Test
    public void testEncryptThis() {
        Assert.assertEquals("", Kata.encryptThis(""));
        Assert.assertEquals("65 119esi 111dl 111lw 108dvei 105n 97n 111ka", Kata.encryptThis("A wise old owl lived in an oak"));
        Assert.assertEquals("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp", Kata.encryptThis("The more he saw the less he spoke"));
        Assert.assertEquals("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare", Kata.encryptThis("The less he spoke the more he heard"));
        Assert.assertEquals("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri", Kata.encryptThis("Why can we not all be like that wise old bird"));
        Assert.assertEquals("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple", Kata.encryptThis("Thank you Piotr for all your help"));
    }

    @Test
    public void testFindUniq() {
        double precision = 0.0000000000001;
        Assert.assertEquals(1.0, Kata.findUniq(new double[]{0, 1, 0}), precision);
        Assert.assertEquals(2.0, Kata.findUniq(new double[]{1, 1, 1, 2, 1, 1}), precision);
    }
}
