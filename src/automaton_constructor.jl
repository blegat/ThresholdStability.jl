export perms, automaton_constructor

"""
    perms(p)

Generates a vector of all sequences of length `p` made up of elements `-1` or `1`.
"""
function perms(p)
    vals = []
    for i in 0:p
        out = unique(permutations([ones(p-i); -ones(i)]))
        for j in 1:length(out)
            push!(vals, out[j])
        end
    end
    return vals
end


"""
    automaton_constructor(Σ::AbstractVector{<:AbstractMatrix})

Generates an automaton tracking admissible transitions between states. `Σ` is a vector of matrices corresponding to a TAR model, assuming a default order generated by [`perms`](@ref).

    automaton_constructor(Σ::AbstractVector{<:AbstractMatrix}, seqlist)

Generates an automaton tracking admissible transitions between states given a custom list of regime sequences.
"""
function automaton_constructor(Σ::AbstractVector{<:AbstractMatrix})
    G = LightAutomaton(length(Σ))
    p = Int(log2(length(Σ)))
    seqlist = perms(p)
    for i in 1:length(seqlist)
        for j in 1:length(seqlist)
            if seqlist[i][1:end-1] == seqlist[j][2:end]
                add_transition!(G, i, j, i)
            end
        end
    end
    return G
end

function automaton_constructor(Σ::AbstractVector{<:AbstractMatrix}, seqlist)
    G = LightAutomaton(length(Σ))
    for i in 1:length(seqlist)
        for j in 1:length(seqlist)
            if seqlist[i][1:end-1] == seqlist[j][2:end]
                add_transition!(G, i, j, i)
            end
        end
    end
    return G
end
