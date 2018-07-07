(ns house-hold.core-spec
(:require [clojure.test :refer :all]
          [speclj.core :refer :all]
          [house-hold.core :refer :all]))


(describe "House Hold"
  (describe "when a small amount is withdrawn return banknotes in order of small to big notes"
    (it "when withdraw 5 euros return { '5' 1 }"
      (should= {"5" 1} (withdraw 5)))

    (it "when withdraw 10 euros return { '5' 2 }"
      (should= {"5" 2} (withdraw 10)))

    (it "when withdraw 15 euros return { '5' 1 '10' 1 }"
      (should= {"5" 1 "10" 1} (withdraw 15)))

    (it "when withdraw 35 euros return { '5' 1 '10' 1 '20' 1 }"
      (should= {"5" 1 "10" 1 "20" 1} (withdraw 35)))

   (it "when withdraw 85 euros return { '5' 1 '10' 1 '20' 1 '50' 1 }"
      (should= {"5" 1 "10" 1 "20" 1 "50" 1} (withdraw 85))))


  (describe "when an amount is withdrawn return banknotes in both orders"
   (it "when withdraw 90 euros return { '5' 2 '10' 1 '20' 1 '50' 1 }"
      (should= {"5" 2 "10" 1 "20" 1 "50" 1} (withdraw 90))))


))

