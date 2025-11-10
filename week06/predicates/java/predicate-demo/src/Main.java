import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        List<String> words = Arrays.asList("cat", "car", "house", "card", "dog");

        Predicate<String> startsWithCa = w -> w.startsWith("ca");

        List<String> caWords = words.stream()
                .filter(startsWithCa)
                .collect(Collectors.toList());
        System.out.println(caWords);

        // Inline predicate
        List<String> longWords = words.stream()
                .filter(w -> w.length() >= 4)
                .collect(Collectors.toList());
        System.out.println(longWords);
    }
}