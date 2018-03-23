# Tp-Web-Design Paeclinck Eliane & Lancelin Camille
# Le sujet de notre projet est "Les cafés à un euro dans Paris"
#Les fonctionnalités implémentées : 
# - La liste des café que l'on peut trier par nom de café et par arrondissements
# - il est possible de chercher un café par son nom ou sa rue
# - il est aussi possible d'ajouter un café à la liste
# pour ce la il faut ajouter un nom, une adresse et choisir un département dans la liste
# une fois ajouté un message d'alerte nous informe que notre café est bien ajouté
# il est donc possible de le chercher dans la liste. 
#
#La page map affiche tous les cafés sur une carte, 
#et il est possible de cliquer dessus pour afficher les informations de celui ci (nom, adresse, arrondissement et prix)
#La carte est interactive , il est possible de zoomer pour voir la localisation du café. 
# 
# Nous avons utilisé :
# - ng-model pour le texte field de recheche et d'ajout de café
# - ng-repeat pour le filtre des arrondissements pour les choisir 
# - ng-class pour savoir quel élément est sélectionné
# - ng-click pour le tri de la liste, les boutons de recherche et d'ajout ainsi que pour changer de page
# - ng-submit pour ajouter un nouveau café
# nous avons fait un filtre custom pour choisir un arrondissement lorsque l'on ajoute un café
# 
# Nous avons utilisé bootstrap pour que notre site soit responsive et s'adapte aux différent taille de fênetres. 
#
# Nous avons un fichier json pour la liste et un fichier geojson pour la carte car le fichier json n'était pas convertible en geojson
