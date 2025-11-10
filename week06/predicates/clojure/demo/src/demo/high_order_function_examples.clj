(ns demo.high-order-function-examples)

(def xs (range 1 30))

(println "xs =" xs)

(println "filter odd? =" (filter odd? xs))

(def mxs (map #(* % %) (filter odd? xs)))

(println "mxs =" mxs)

(def prt3mxs (partition 3 mxs))
(println "partition 3 =" prt3mxs)

(println "map partial reduce 1 =" (map #(reduce + %) prt3mxs))

(println "map partial reduce 2 =" (map (partial reduce +) prt3mxs))

(println "final result ="
         (->> xs
              (filter odd?)                                 ; HOF: predicate function
              (map #(* % %))                                ; HOF: anonymous function
              (partition 3)                                 ; groups into triplets
              (map (partial reduce +))                      ; HOF: partial application of reduce
              (take 5)))