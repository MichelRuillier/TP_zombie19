/*
Vous devez donc reproduire une fonction capable d’infecter un arbre de données contenant des personnes. Bien entendu votre ZOMBIE-19 devra faire la différence entre les personnes seules et groupées pour mieux déployer le virus !

Chaque personne aura un nom et un âge et un statut d’infection vous devrez faire en sorte de répandre le virus à l’ensemble des personnes d’un groupe qui contient une personne infectée.

Bien entendu dans chaque groupe une personne infectée pourra avoir côtoyer d’autres personnes qui font elle-même partie d’un groupe.

Vous devrez donc faire en sorte que le ZOMBIE-19 infecte et se répande
sur toutes les personnes qui sont entrées en contact.

intro : A présent vous allez devoir implémenter une fonction capable de réaliser une pandémie youpi ! Vous pouvez utiliser tout ce que vous avez vu précédemment.

*/

/*

A présent vous allez devoir implémenter des variants du virus qui ont tous des propriétés particulières.

Vous avez réalisé la premier séquençage du virus à présent il vous faut créer les variants:

Vous devrez créer des variants :
Zombie-A : Qui infecte du haut vers le bas. (les personnes de touts les groupes sociaux Descendant)
Zombie-B : Qui infecte du bas vers le haut. (les personnes de touts les groupes sociaux Ascendant)
Zombie-32 : Qui infecte du bas vers le haut et du haut vers le bas toutes personnes qui à 32 ans et plus. (de tout les groupes social Ascendant et Descendant)
Zombie-C : Qui infecte une personne sur 2 dans un groupe social (mais pas les groupes social en contact Ascendant ou Descendant)
Zombie-Ultime : Qui infecte seulement la personne racine la plus Ascendante (La personne la plus haute de tous les cercles social)

*/


'use strict';
const array = [{
      "prenom": "Albert",
      "age": 35,
      "bool": false,
      "enfants": [
        {
          "prenom": "Marie",
          "age": 4,
          "bool": false,
          "enfants": [
            {
              "prenom": "Peter",
              "age": 25,
              "bool": false,
              "enfants": [
                {
                  "prenom": "John",
                  "age": 7,
                  "bool": false,
                  "enfants": [
                    {
                      "prenom": "Paul",
                      "age": 10,
                      "bool": false,
                      "enfants": [
                        {
                          "prenom": "Steven",
                          "age": 16,
                          "bool": true,
                          "enfants": [
                            {
                              "prenom": "Anne",
                              "age": 18,
                              "bool": false,
                              "enfants": [
                                {
                                  "prenom": "Eric",
                                  "age": 23,
                                  "bool": true,
                                  "enfants": [
                                    {
                                      "prenom": "Mary",
                                      "age": 30,
                                      "bool": false,
                                      "enfants": []
                                    },
                                    {
                                      "prenom": "Alice",
                                      "age": 31,
                                      "bool": true,
                                      "enfants": []
                                    },
                                    {
                                      "prenom": "Richard",
                                      "age": 32,
                                      "bool": false,
                                      "enfants": []
                                    }
                                  ]
                                },
                                {
                                  "prenom": "Olivia",
                                  "age": 24,
                                  "bool": false,
                                  "enfants": [
                                    {
                                      "prenom": "Laurent",
                                      "age": 33,
                                      "bool": false,
                                      "enfants": [
                                        {
                                          "prenom": "Alicia",
                                          "age": 40,
                                          "bool": true,
                                          "enfants": []
                                        },
                                        {
                                          "prenom": "Charles",
                                          "age": 41,
                                          "bool": false,
                                          "enfants": []
                                        },
                                        {
                                          "prenom": "Julia",
                                          "age": 42,
                                          "bool": true,
                                          "enfants": []
                                        }
                                      ]
                                    },
                                    {
                                      "prenom": "Sophie",
                                      "age": 34,
                                      "bool": true,
                                      "enfants": [
                                        {
                                          "prenom": "Luc",
                                          "age": 43,
                                          "bool": false,
                                          "enfants": [
                                            {
                                              "prenom": "Sebastian",
                                              "age": 50,
                                              "bool": true,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Olivier",
                                              "age": 51,
                                              "bool": false,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Matthieu",
                                              "age": 52,
                                              "bool": true,
                                              "enfants": []
                                            }
                                          ]
                                        },
                                        {
                                          "prenom": "Claire",
                                          "age": 44,
                                          "bool": false,
                                          "enfants": [
                                            {
                                              "prenom": "Thomas",
                                              "age": 53,
                                              "bool": true,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Alexandra",
                                              "age": 54,
                                              "bool": false,
                                              "enfants": []
                                            },
                                            {
                                              "prenom": "Gérard",
                                              "age": 55,
                                              "bool": true,
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
                      "bool": false,
                      "enfants": []
                    }
                  ]
                },
                {
                  "prenom": "Isabelle",
                  "age": 8,
                  "bool": false,
                  "enfants": []
                }
              ]
            },
            {
              "prenom": "Julie",
              "age": 26,
              "bool": false,
              "enfants": []
            }
          ]
        },
        {
          "prenom": "Antoine",
          "age": 5,
          "bool": false,
          "enfants": []
        }
      ]
    }
  ]
}]
                  
 /*************** zombie A ****************************/
function propagationBottomToTop(tree, treeStr = ".\n", prefix = "", sick=false){
    for (let i=0; i < tree.length; i++){
                                  if(tree[i].bool === true){   
                                   sick = true;
                                  }
                                  tree[i].bool = sick;
        treeStr += prefix  + tree[i].prenom+"-"+ tree[i].age+"-"+tree[i].bool+ "\n";
        if (tree[i].enfants) {
                      let branch_herit = tree.length - 1 === i ? "    " : "";
            treeStr += propagationBottomToTop(tree[i].enfants, "",  prefix + branch_herit ,sick);
        }
    }
    return treeStr;
}

//console.log(propagationBottomToTop(array));




/************************ Not WORKING ZOMBIE B *******************/
function propagationTopToBottom(tree, parent,chemin, profondeur){
    for (let i = 0; i < parent.length; i++) {
        if(parent[i].enfants.length > 0){
            if(chemin[profondeur] == i && chemin.length > profondeur){
                propagationTopToBottom(data,parent[i].enfants,chemin,profondeur+1) 
            }
        }
    }   
}
//console.log(propagationTopToBottom(array));

/***************************** ZOMBIE 32 ***********************/

function propagationPlus32(tree, treeStr = ".\n", prefix = "", sick=false){
    for (let i=0; i < tree.length; i++){
              for(let j=0; j <=tree[i].enfants.length; j++){
        if(tree[i].enfants[j]){
          if(tree[i].enfants[j].age < 32 ){
            console.log(tree[i].enfants[j])
            tree[i].enfants[j].bool = false;
          }
        }
      }
                                  if(tree[i].bool === true){   
                                   sick = true;
                                  }
                                  tree[i].bool = sick;
        treeStr += prefix  + tree[i].prenom+"-"+ tree[i].age+"-"+tree[i].bool+ "\n";
        if (tree[i].enfants) {
          let branch_herit = tree.length - 1 === i ? "    " : "";
            treeStr += propagationPlus32(tree[i].enfants, "", prefix + branch_herit ,sick);
        }

    }
    return treeStr;
}

//console.log(propagationPlus32(array));


/********************************* ZOMBIE C **************************/

function propagationOneOnTwo(tree, treeStr = ".\n", prefix = "",OneSick=false, sick=false){
    for (let i=0; i < tree.length; i++){
                                    if(OneSick== false){
                                       sick = true;
                                      OneSick = true; 
                                    } else if(OneSick == true){
                                      OneSick = false;
                                      sick = false;
                                    }
                                  
                                  tree[i].bool = sick;
        treeStr += prefix  + tree[i].prenom+"-"+ tree[i].age+"-"+tree[i].bool+ "\n";
        if (tree[i].enfants) {
                      let branch_herit = tree.length - 1 === i ? "    " : "";
            treeStr += propagationOneOnTwo(tree[i].enfants, "",  prefix + branch_herit,OneSick ,sick);
        }
    }
    return treeStr;
}

//console.log(propagationOneOnTwo(array))


/************************* ZOMBIE Ultime *******************************/

function propagationLastOfUs(tree, treeStr = ".\n", prefix = "", sick=false){
    for (let i=0; i < tree.length; i++){
        if(tree[i].enfants.length == 0){
          tree[i].enfants.bool = true;
        }
        treeStr += prefix  + tree[i].prenom+"-"+ tree[i].age+"-"+tree[i].bool+ "\n";
        if (tree[i].enfants) {
                      let branch_herit = tree.length - 1 === i ? "    " : "";
            treeStr += propagationLastOfUs(tree[i].enfants, "",  prefix + branch_herit,sick);
        }
    }
    return treeStr;
}
console.log(propagationLastOfUs(array));