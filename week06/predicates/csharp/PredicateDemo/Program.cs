using System;
using System.Collections.Generic;
using System.Linq;

namespace PredicateDemo
{
    internal class Program
    {
        private static void FilterWithLinq()
        {
            var words = new List<string> { "cat", "car", "house", "card", "dog" };
            
            // this is a lambda equation
            Func<string, bool> startsWithCa = w => w.StartsWith("ca", StringComparison.Ordinal);
            
            var caWords = words.Where(startsWithCa).ToList();
            Console.WriteLine(string.Join(", ", caWords));
           
            var longWords = words.Where(w => w.Length >= 4).ToList();
            Console.WriteLine(string.Join(", ", longWords)); // house, card
        }

        private static void PredicateFunction()
        {
            var numbers = new List<int> { 1, 2, 3, 4, 5, 6 };
           
            Predicate<int> isEven = n => n % 2 == 0;

            // Find first even number
            int firstEven = numbers.Find(isEven);
            Console.WriteLine($"First even: {firstEven}"); 
            
            // Find all even numbers
            List<int> evens = numbers.FindAll(isEven);
            Console.WriteLine($"Evens: {string.Join(", ", evens)}");

            // Remove all even numbers
            int removed = numbers.RemoveAll(isEven);
            Console.WriteLine($"Removed {removed} items");
            Console.WriteLine($"Remaining: {string.Join(", ", numbers)}");
        }

        public static void Main(string[] args)
        {
            FilterWithLinq();
            PredicateFunction();
        }
    }
}