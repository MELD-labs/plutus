-- | The CEK machine tests.

{-# LANGUAGE OverloadedStrings #-}
module CekMachine
    ( test_evaluateCek
    ) where

import           Language.PlutusCore.Generators.Interesting
import           Language.PlutusCore.Generators.Test
import           Language.PlutusCore.Interpreter.CekMachine

import           Test.Tasty
import           Test.Tasty.Hedgehog

test_evaluateCek :: TestTree
test_evaluateCek = testGroup "evaluateCk"
    [ testGroup "props" $ fromInteretingGens (\name -> testProperty name . propEvaluate evaluateCek)
    ]
