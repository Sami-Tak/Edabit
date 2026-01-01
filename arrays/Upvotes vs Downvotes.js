// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getvotecount(votes){
    return votes.upvotes - votes.downvotes;
}

console.log(getvotecount({ upvotes: 13, downvotes: 0}));
console.log(getvotecount({ upvotes: 2, downvotes: 33}));
console.log(getvotecount({ upvotes: 132, downvotes: 132}));