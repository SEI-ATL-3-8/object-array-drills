const expect = chai.expect;
const assert = chai.assert;


//exersice 1
describe('Retrieve the string "Sire" from album1', () => {
  it("exists", () => {
    expect(albumOneLabel).to.eq("Sire");
  });
});

//exersice 2
describe('Change the title of album1 from Talking Heads to Talking Heads: 77', () => {
  it("exists", () => {
    expect(album1.title).to.eq("Talking Heads: 77");
  });
});
//exersice 3
describe("use an array method to add LP to album3s formats", () => {
  it("exists", () => {
    expect(album2.albumDetails.formats[1]).to.eq("LP");
  });
});

//exersice 4

describe("Change the release date of album3 from a string into a Date object", () => {
  it("exists", () => {
    expect(album3.released).to.deep.eq(new Date("August 3, 1979"));
  });
});

//exersice 5

describe(`Add the label "Sire" to album4's details`, () => {
  it("exists", () => {
    expect(album4.albumDetails.label).to.eq("Sire");
  });
});


//exersice 6

describe(`Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"`, () => {
  it("exists", () => {
    expect(album5.albumDetails.formats).to.deep.eq(["CD", "cassette", "LP"]);
  });
});

//exersice 7

describe('Make the label "emi" in album6 all uppercase', () => {
  it("exists", () => {
    expect(album6.albumDetails.labels).to.deep.eq(["Sire", "EMI"]);
  });
});

//exersice 8

describe(`Convert album7's 'labels' property from the string value`, () => {
  it("exists", () => {
    expect(album7.albumDetails.labels).to.deep.eq(["Sire", "EMI"]);
  });
});





//Part 3

//exersice 1

describe('THE BAND', () => {
  //exersice 1
  it("exists", () => {
    expect(band).to.be.an('object');
  });
  //exercise 2
  it('should have property `name`', () => {
    expect(band).to.have.property('name')
    expect(band.name).to.eq('Talking Heads') 
  })
  //exercise 3
  it('should have property `members`',() =>{
    expect(band).to.have.property(`members`);
    expect(band.members).to.be.an(`array`);
  });
  //exercise 4
  it('should have property `albums`', () =>{
    expect(band).to.have.property('albums');
    expect(band.albums).to.eq(talkingHeadsAlbums);
  })
  it("should have Tiny Weymouth, Chris Franz and Jerry Harrison in band members", () => {
    expect(band.members).to.deep.eq([
      "David Byrne",
      "Tiny Weymouth",
      "Chris Franz",
      "Jerry Harrison",
    ]);
  })
});


//Part 4 



////exercise 1

describe("Conditional Logic", () => {
  it('should log "Talking Heads were a prolific band" for talkingHeadsAlbums.length >= 6', function () {
    if (talkingHeadsAlbums.length >= 6) {
      expect(opinion).to.eq("Talking Heads were a prolific band");
    } else {
      expect(opinion).to.eq("Talking heads didnt have much output");
    }
  });
});


///exercise 2

describe("Write a conditional to check if numAlbums is even", () => {
  it("Should check if its divisble by 2" , () => {
    if (numAlbums % 2 === 0) {
      expect(result).to.eq("even");
    } else {
      expect(result).to.eq("odd");
    }
    })
})