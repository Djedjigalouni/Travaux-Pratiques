Travaux Pratiques - Commandes de Base de Git 


1-Configuration de Git :
	git config --global user.name “nom_utilisateur” 
	git config --global user.email “email utilisateur”
 
2-Création d'un dépôt Git :
   a)pwd

	/c/Users/mohamed

   b)mkdir travaux_pratiques
   
   c)cd travaux_pratiques

   d)git init
	Initialized empty Git repository in C:/Users/mohamed/travaux_pratiques/.git/

3- Ajout de fichiers au dépôt :

    a) touch index.html style.css script.js

  b)ls
	index.html  script.js  style.css

  c) git status

	On branch master

	No commits yet

	Untracked files:
 	 (use "git add <file>..." to include in what will be committed)

        	 index.html
       	 script.js
       	 style.css

	nothing added to commit but untracked files present (use "git add" to track)

  d) git add -A

  e) git status
	On branch master

	No commits yet

	Changes to be committed:
  	(use "git rm --cached <file>..." to unstage)
       	 new file:   index.html
        	 new file:   script.js
       	 new file:   style.css

 4-Création d'un commit :
      
     a) git commit -m "Premier commit"
	[master (root-commit) 103c6ea] Premier commit
 	3 files changed, 0 insertions(+), 0 deletions(-)
	create mode 100644 index.html
 	create mode 100644 script.js
 	create mode 100644 style.css


	
   b) git log
	 
   	commit 103c6ea0358409d9ddd26b6bb3f91f620435fae5 (HEAD -> master)
	Author: djedjiga <djedjiga.louni@gmail.com>
	Date:   Sat Oct 28 16:16:22 2023 +0200

    		Premier commit


5-Modification de fichiers 
	a)   index.html après modification : 
                  Remarque :avant la modification le fichier index.html était vide .
               

6- Création d'un deuxième commit :

	a)  git add -A
   	b) git commit -m"mes premières modifications"
		
7-Modification d'un commit :
	a) git commit --amend -m "first modifications"

		La commende git commit –amend permet de modifier le message de dernier commit ,soit à partir d’un éditeur de texte ou bien directement on ajoutant «  -m "le nouveau message"».

8-Suppression d'un commit :
          a) git reset HEAD

9-Création d'une étiquette :  
           a) git tag version1 HEAD

		Les tags sont des réfs qui pointent vers des points spécifiques de l'historique Git. Les tags sont généralement utilisés pour capturer un point de l'historique utilisé pour une version marquée .

10-Branches : 
	a)  git checkout master
	   git checkout -b ma_branche
             b) modification du fichier index.html.
                 git status
                 git add index.html
                 git commit -m "nouveau commit"

11-Fusion de branches :

	a) git checkout master 
	b) git merge ma_branche

12- Suppression de fichiers :

	a) git checkout -b branche-suppression-fichier
	b) ls
  	   rm style.css
       c) git status
         git add style.css
         git commit -m  "suppression du fichier style.css"


 13-Récupération d'un projet Git : 

      git clone https://github.com/Djedjigalouni/Site-De-Voyage.git



14-. Suppression d'un fichier du dépôt (untrack) :

	a) git rm –cached style.txt

15-Utlisation de l'option –soft lors de la suppression d'un commit :
	a)Modifier le fichier index.html
	    git add index.html
	     git commit -m "deuxième modification de index.html"
	b) git reset --soft HEAD

16-Pousser vers un référen�el distant : 
	a)git remote add origin https://github.com/Djedjigalouni/Travaux-Pratiques.git

        git push -u origin master

		Enumerating objects: 15, done.
		Counting objects: 100% (15/15), done.
		Delta compression using up to 4 threads
		Compressing objects: 100% (14/14), done.
		Writing objects: 100% (15/15), 2.32 KiB | 792.00 KiB/s, done.
		Total 15 (delta 2), reused 0 (delta 0), pack-reused 0
		remote: Resolving deltas: 100% (2/2), done.
		To https://github.com/Djedjigalouni/Travaux-Pratiques.git
 		* [new branch]      master -> master
		branch 'master' set up to track 'origin/master'.


17- Clonage une branche distante :

	a) git clone -b new_branch_to_checkout https://github.com/Djedjigalouni/Travaux-		Pratiques.git
		Cloning into 'Travaux-Pratiques'...
		remote: Enumerating objects: 15, done.
		remote: Counting objects: 100% (15/15), done.
		remote: Compressing objects: 100% (12/12), done.
		remote: Total 15 (delta 2), reused 15 (delta 2), pack-reused 0
		Receiving objects: 100% (15/15), done.
		Resolving deltas: 100% (2/2), done.

18- Tirer les dernières modifica�ons du référen�el distant :

	a) git fetch

		From https://github.com/Djedjigalouni/Travaux-Pratiques
 		* [new branch]      new_branch_to_checkout -> origin/new_branch_to_checkout

	b)git pull
		Already up to date.

19- Créer deux nouvelles branches :

	a)git fetch
		From https://github.com/Djedjigalouni/Travaux-Pratiques
 		* [new branch]      new_branch_19_1 -> origin/new_branch_19_1
[new branch]      new_branch_19_2 -> origin/new_branch_19_2

20. Clôture du TP :

$ git checkout -b branche_resume
Switched to a new branch 'branche_resume'


