(ns house-hold.core)

(def banknotes [5 10 20 50])

(defn get-notes [amount _banknotes]
  (cond
    (= amount 0) []
    (and (>= amount (first _banknotes)) (> (- amount (first _banknotes)) (first _banknotes)))  (merge (get-notes (- amount (first _banknotes)) (rest _banknotes)) [(str (first _banknotes)), 1])
    :else (merge (get-notes (- amount (first _banknotes))  _banknotes) [(str (first _banknotes)), 1])

))

(defn withdraw [amount]
  (reduce (fn [acc x]
    (cond
      (contains? acc (first x)) (update acc (first x) inc)
      :else (assoc acc (first x) (second x))
    )) {} (get-notes amount banknotes)))

