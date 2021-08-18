var documenterSearchIndex = {"docs":
[{"location":"cksvar/#CKSVAR-models","page":"CKSVAR models","title":"CKSVAR models","text":"","category":"section"},{"location":"cksvar/","page":"CKSVAR models","title":"CKSVAR models","text":"ThresholdStability.jl includes tools to convert censored and kinked structural vector autoregressive (CKSVAR) models into TVAR models.","category":"page"},{"location":"cksvar/","page":"CKSVAR models","title":"CKSVAR models","text":"Ox code to estimate CKSVAR models is available here.","category":"page"},{"location":"cksvar/","page":"CKSVAR models","title":"CKSVAR models","text":"CKSVAR_to_TAR\nCKSVAR_to_companion\nCKSVAR_to_companionFD","category":"page"},{"location":"cksvar/#ThresholdStability.CKSVAR_to_TAR","page":"CKSVAR models","title":"ThresholdStability.CKSVAR_to_TAR","text":"CKSVAR_to_TAR(C, Cstar, βtilde, nlags)\n\nReturns 1. a set of matrices corresponding to the CKSVAR model (with censored variable in levels) in TVAR form, and 2. a set encoding state-space constraints.\n\n\n\n\n\n","category":"function"},{"location":"cksvar/#ThresholdStability.CKSVAR_to_companion","page":"CKSVAR models","title":"ThresholdStability.CKSVAR_to_companion","text":"CKSVAR_to_companion(C, Cstar, βtilde, nlags)\n\nConverts CKSVAR model (with censored variable in levels) into companion form.\n\n\n\n\n\n","category":"function"},{"location":"cksvar/#ThresholdStability.CKSVAR_to_companionFD","page":"CKSVAR models","title":"ThresholdStability.CKSVAR_to_companionFD","text":"CKSVAR_to_companionFD(F, Fstar, βtilde, nlags; diff=true)\n\nConverts CKSVAR model estimated with the censored variable entering in first differences into companion form. The default setting diff=true returns the companion form with the censored variable entering in first differences. To retrieve the companion form with censored variable entering in levels, set diff=false.\n\n\n\n\n\n","category":"function"},{"location":"cksvar/#Construction-of-automata","page":"CKSVAR models","title":"Construction of automata","text":"","category":"section"},{"location":"cksvar/","page":"CKSVAR models","title":"CKSVAR models","text":"CKSVAR_to_TAR outputs a set of matrices generated in an order generated by the perms function (as well as a set encoding state space constraints.)","category":"page"},{"location":"cksvar/","page":"CKSVAR models","title":"CKSVAR models","text":"automaton_constructor provides a method to construct an automaton suitable for use with a CKSVAR model converted using CKSVAR_to_TAR, assuming this order. It is also suitable for any other set of matrices that is ordered in a similar way (see examples/AR2.jl).","category":"page"},{"location":"cksvar/","page":"CKSVAR models","title":"CKSVAR models","text":"perms\nautomaton_constructor","category":"page"},{"location":"cksvar/#ThresholdStability.perms","page":"CKSVAR models","title":"ThresholdStability.perms","text":"perms(p)\n\nGenerates a vector of all sequences of length p made up of elements -1 or 1.\n\n\n\n\n\n","category":"function"},{"location":"cksvar/#ThresholdStability.automaton_constructor","page":"CKSVAR models","title":"ThresholdStability.automaton_constructor","text":"automaton_constructor(Σ::AbstractVector{<:AbstractMatrix})\n\nGenerates an automaton tracking admissible transitions between states. Σ is a vector of matrices corresponding to a TAR model, assuming a default order generated by perms.\n\n\n\n\n\nautomaton_constructor(Σ::AbstractVector{<:AbstractMatrix}, seqlist)\n\nGenerates an automaton tracking admissible transitions between states given a custom list of regime sequences.\n\n\n\n\n\n","category":"function"},{"location":"cksvar/","page":"CKSVAR models","title":"CKSVAR models","text":"Automata can also be constructed manually using HybridSystems.jl.","category":"page"},{"location":"stability/#Stability-Tools","page":"Stability Tools","title":"Stability Tools","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ThresholdStability","category":"page"},{"location":"#ThresholdStability","page":"Home","title":"ThresholdStability","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ThresholdStability.jl is a package implementing techniques to determine the stability of discrete-time threshold vector autoregressive (TVAR) models.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"cksvar.md\", \"stability.md\"]\nDepth = 2","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
