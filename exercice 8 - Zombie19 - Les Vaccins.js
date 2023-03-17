/*
A présent vous allez devoir concevoir des vaccins capables de soigner toutes les personnes infectées par les variants ! Le monde attend ces vaccins, vous devez absolument trouver une solution, l'avenir de l’humanité dépend de vous !

Vous allez devoir utiliser votre arbre d’infectés après le passage du virus et soigner
le monde.

En fonction des variants qui ont propagé l’infection une première fois vous allez devoir déployer les vaccins suivants :

Vaccin-A.1 contre Zombie-A et Zombie-32 : N’est pas encore très efficace il permet de soigner toutes les personnes d’un âge compris entre 0 ans et 30 ans et de les immuniser contre tous les variants (Ascendant et Descendant)
Vaccin-B.1 contre Zombie-B et Zombie-C : Il tue une personne sur 2 et soigne les autres mais ne leur donne pas l’immunité. (Ascendant et Descendant)
Vaccin-Ultime contre Zombie-Ultime : Son porteur ne pourra plus jamais être infecté et infecter les autres.

*/


'use strict';
const array = [{
      "prenom": "Albert",
      "age": 35,
      "bool": true,  "immunite" : false, "dead": false,
    "immunite" : false,
      "enfants": [
        {
          "prenom": "Marie",
          "age": 4,
          "bool": true,  "immunite" : false, "dead": false,
          "enfants": [
            {
              "prenom": "Peter",
              "age": 25,
              "bool": false,  "immunite" : false, "dead": false,
              "enfants": [
                {
                  "prenom": "John",
                  "age": 7,
                  "bool": false,  "immunite" : false, "dead": false,
                  "enfants": [
                    {
                      "prenom": "Paul",
                      "age": 10,
                      "bool": false,  "immunite" : false, "dead": false,
                      "enfants": [
                        {
                          "prenom": "Steven",
                          "age": 16,
                          "bool": true,  "immunite" : false, "dead": false,
                          "enfants": [
                            {
                              "prenom": "Anne",
                              "age": 18,
                              "bool": false,  "immunite" : false, "dead": false,
                              "enfants": [
                                {
                                  "prenom": "Eric",
                                  "age": 23,
                                  "bool": true,  "immunite" : false, "dead": false,
                                  "enfants": [
                                    {
                                      "prenom": "Mary",
                                      "age": 30,
                                      "bool": false,  "immunite" : false, "dead": false,
                                      "enfants": []
                                    },
                                    {
                                      "prenom": "Alice",
                                      "age": 31,
                                      "bool": true,  "immunite" : false, "dead": false,
                                      "enfants": []
                                    },
                                    {
                                      "prenom": "Richard",
                                      "age": 32,
                                      "bool": false,  "immunite" : false, "dead": false,
                                      "enfants": []
                                    }
                                  ]
                                },
                                {
                                  "prenom": "Olivia",
                                  "age": 24,
                                  "bool": false,  "immunite" : false, "dead": false,
                                  "enfants": [
                                    {
                                      "prenom": "Laurent",
                                      "age": 33,
                                      "bool": false,  "immunite" : false, "dead": false,
                                      "enfants": [
                                        {
                                          "prenom": "Alicia",
                                          "age": 40,
                                          "bool": true,  "immunite" : false, "dead": false,
                                          "enfants": []
                                        },
                                        {
                                          "prenom": "Charles",
                                          "age": 41,
                                          "bool": false,  "immunite" : false, "dead": false,
                                          "enfants": []
                                        },
                                        {
                                          "prenom": "Julia",
                                          "age": 42,
                                          "bool": true,  "immunite" : false, "dead": false,
                                          "enfants": []
                                        }
                                      ]
                                    },
                                    {
                                      "prenom": "Sophie",
                                      "age": 34,
                                      "bool": true,  "immunite" : false, "dead": false,
                                      "enfants": [
                                        {
                                          "prenom": "Luc",
                                          "age": 43,
                                          "bool": false,  "immunite" : false, "dead": false,
                                          "enfants": [
                                            {
                                              "prenom": "Sebastian",
                                              "age": 50,
                                              "bool": true,  "immunite" : false, "dead": false,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Olivier",
                                              "age": 51,
                                              "bool": false,  "immunite" : false, "dead": false,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Matthieu",
                                              "age": 52,
                                              "bool": true,  "immunite" : false, "dead": false,
                                              "enfants": []
                                            }
                                          ]
                                        },
                                        {
                                          "prenom": "Claire",
                                          "age": 44,
                                          "bool": false,  "immunite" : false, "dead": false,
                                          "enfants": [
                                            {
                                              "prenom": "Thomas",
                                              "age": 53,
                                              "bool": true,  "immunite" : false, "dead": false,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Alexandra",
                                              "age": 54,
                                              "bool": false,  "immunite" : false, "dead": false,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Gérard",
                                              "age": 55,
                                              "bool": true,  "immunite" : false, "dead": false,
                                              "enfants": []
                                            }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                        }
                      ]
                    },
                    {
                      "prenom": "Noah",
                      "age": 11,
                      "bool": false,  "immunite" : false, "dead": false,
                      "enfants": []
                    }
                  ]
                },
                {
                  "prenom": "Isabelle",
                  "age": 8,
                  "bool": false,  "immunite" : false, "dead": false,
                  "enfants": []
                }
              ]
            },
            {
              "prenom": "Julie",
              "age": 26,
              "bool": false,  "immunite" : false, "dead": false,
              "enfants": []
            }
          ]
        },
        {
          "prenom": "Antoine",
          "age": 5,
          "bool": false,  "immunite" : false, "dead": false,
          "enfants": []
        }
      ]
    }
  ]
}]



/**************** VACCIN A *******************************************************************/

function vacccinationUntil30(tree, treeStr = ".\n", prefix = "", sick=false, immunite=false){
    for (let i=0; i < tree.length; i++){
                      for(let j=0; j <=tree[i].enfants.length; j++){
        if(tree[i].enfants[j]){
          if(tree[i].enfants[j].age <= 30 || tree[i].enfants[j].immunite == true){
            tree[i].enfants[j].bool = false;
            tree[i].enfants[j].immunite = true;
          }
        }
      }
                                  if(tree[i].bool === true){   
                                   sick = true;
                                  }
                                  tree[i].bool = sick;
        treeStr += prefix  + tree[i].prenom+"-"+ tree[i].age+"| Comtaminé : "+tree[i].bool+"| Immunite : "+tree[i].immunite+ "\n";
        if (tree[i].enfants) {
                      let branch_herit = tree.length - 1 === i ? "    " : "";
            treeStr += vacccinationUntil30(tree[i].enfants, "",  prefix + branch_herit ,sick,immunite);
        }
    }
    return treeStr;
}

//console.log(vacccinationUntil30(array));


/**************** VACCIN B *******************************************************************/


function deadOneOnTwo(tree, treeStr = ".\n", prefix = "", sick=false, OneSick=false, immunite=false){
    for (let i=0; i < tree.length; i++){
        
                                    if(OneSick== false){
                                        sick = true;
                                      OneSick = true;
                                        tree[i].dead = true
                                    } else if(OneSick == true){
                                          OneSick = false;
                                        sick = false
                                        tree[i].dead = false;
                                    }
                                  

        tree[i].bool = sick;
        treeStr += prefix  + tree[i].prenom+"-"+ tree[i].age+"| Comtamine : "+tree[i].bool+"| Immunite : "+tree[i].immunite+"| Mort : "+tree[i].dead+ "\n";
        if (tree[i].enfants) {
                      let branch_herit = tree.length - 1 === i ? "    " : "";
            treeStr += deadOneOnTwo(tree[i].enfants, "",  prefix + branch_herit ,sick,OneSick,immunite);
        }
    }
    return treeStr;
}

//console.log(deadOneOnTwo(array));


/**************** VACCIN C *******************************************************************/

function vacccinationTheLastOfUs(tree, treeStr = ".\n", prefix = ""){
    for (let i=0; i < tree.length; i++){
        if(tree[i].enfants.length == 0){
          tree[i].immunite = true;
            tree[i].bool = false;
            
        }
        treeStr += prefix  + tree[i].prenom+"-"+ tree[i].age+"| Comtaminé : "+tree[i].bool+"| Immunite : "+tree[i].immunite+ "\n";
        if (tree[i].enfants) {
                      let branch_herit = tree.length - 1 === i ? "    " : "";
            treeStr += vacccinationTheLastOfUs(tree[i].enfants, "",  prefix + branch_herit);
        }
    }
    return treeStr;
}

console.log(vacccinationTheLastOfUs(array));