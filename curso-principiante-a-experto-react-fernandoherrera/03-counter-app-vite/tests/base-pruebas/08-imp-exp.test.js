import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

// describe("Pruebas en 08-imp-exp", () => {
//   test("getHeroById debe de retornar un heroe por ID", () => {
//     const id = 1;
//     const hero = getHeroeById(id);

//     expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
//   });

//  test("getHeroeById debe de retornar undefined si no existe", () =>{
//     const id = 100;
//     const hero = getHeroeById(id);

//     console.log(hero)

//     expect(hero).toBeFalsy();
//  })

// });

describe("getHeroesByOwner solo heroes de DC", () => {

test("getHeroesByOwner debe de retornar un heroe por owner", () => {
  const owner = "DC";
  const hero = getHeroesByOwner(owner);

  expect(hero).toEqual([
    { id: 1, name: "Batman", owner: "DC" },
    { id: 3, name: "Superman", owner: "DC" },
    { id: 4, name: "Flash", owner: "DC" },
  ]);
});
});

describe("getHeroesByOwner solo heroes de Marvel", () => {

    test("getHeroesByOwner debe de retornar un heroe por owner", () => {
      const owner = "Marvel";
      const hero = getHeroesByOwner(owner);
    
      expect(hero).toEqual([
        { id: 2, name: "Spiderman", owner: "Marvel" },
        { id: 5, name: "Wolverine", owner: "Marvel" },
       
      ]);
    });
    });
    