# Notes de version

*[English](RELEASE-NOTES.md) · Français*

## 23 novembre 2026 — titration partie en air ambiant

Une titration peut commencer en air ambiant, pour montrer d'abord la désaturation en air. Pendant le test, le bouton « Oxygène : air ambiant, modifier » ouvre « Passer sous oxygène », où l'on choisit l'interface, le mode, la source et le débit ou le réglage ; les changements suivants se font comme avant, et annuler le premier changement ramène à l'air ambiant. Le compte rendu l'écrit (« air ambiant au départ, puis lunettes, débit continu », « passage de l'air ambiant à 2 L/min à 1 min 42 s »), et la piste O2 de la figure part de zéro. Sur iPhone, l'écran du test d'une titration tient désormais sans que les boutons du bas passent sous la barre d'accueil.

## 23 novembre 2026 — écran du test

Sur iPhone, l'écran du test montre un tableau des six minutes en gros chiffres : SpO2, FC et nombre d'allers de chaque minute. La ligne de la minute en cours s'ouvre d'elle-même, et on peut toucher n'importe quelle ligne pour la remplir ou la corriger ; une minute choisie à la main n'est plus reprise au changement de minute. Sur iPad, la carte de la minute suit de même le chronomètre, et les six minutes restent touchables. « Le patient s'arrête » ne fait plus apparaître de panneau : le bouton reste enfoncé et affiche la durée de l'arrêt, la case de la phrase donne la phrase de reprise et le temps restant avant de la redire, et on touche de nouveau le bouton quand le patient repart. Les SpO2 et FC saisies pendant un arrêt gardent leur heure et sont tracées à ce moment, dans la bande de l'arrêt, sur la figure du bilan et du compte rendu ; la ligne de la minute porte la mention « arrêt ». La distance est exprimée partout de la même façon : pourcentage de la valeur théorique, suivi de la valeur théorique et de la limite inférieure de la normale (LIN).

## 22 novembre 2026 — situations imprévues

Corrections issues de scénarios d'usage hors du cadre prévu. Une valeur improbable (SpO2 hors de 50 à 100 %, FC hors de 30 à 220/min, âge hors de 18 à 100 ans, taille hors de 100 à 230 cm, poids hors de 25 à 250 kg) s'affiche en rouge, n'entre dans aucun calcul ni dans le compte rendu, et figure dans la liste « À compléter » ; auparavant, une SpO2 tapée 9 au lieu de 90 passait telle quelle dans la synthèse. La vitesse de démonstration du chronomètre revient à ×1 à chaque nouveau test et, sinon, est rappelée sur DÉPART et sur le chronomètre. « Remplir un test d'exemple » demande confirmation quand un test contient des données, et part d'un test vierge. Un aller oublié peut être ajouté après la fin (compté dans la distance, pas dans la vitesse) ; deux touchers à moins de 3 secondes ne comptent qu'un aller, et deux touchers rapides ne zooment plus la page. Une fois le test terminé, l'écran « Prêt au départ » propose « Nouveau test » à la place de DÉPART. Un test terminé est gardé jusqu'au « Nouveau test » suivant, au-delà de 12 heures. Pendant les 30 premières secondes, « Faux départ » remet le chronomètre à zéro sans effacer le patient ni le repos. Au retour d'une mise en veille ou d'un appel, un seul bip sonne pour les phrases manquées.

## 22 novembre 2026 — application en anglais

L'application est disponible en anglais comme en français. Elle suit la langue de l'appareil, et un réglage « Langue » permet de choisir entre automatique, français et anglais. En anglais, les consignes, les encouragements et l'échelle de Borg sont ceux des normes d'origine : consignes et encouragements de la norme ERS/ATS de 2014 (tableaux 5 et 6), échelle de Borg modifiée de l'énoncé ATS de 2002 (tableau 2), et question posée après le test, tirée du même énoncé. Les synthèses et le compte rendu Word sont rédigés dans la langue de l'application ; en anglais, le fichier Word porte l'abréviation anglaise, par exemple 6MWT_2026-11-22_10-18.docx, et l'heure de l'objet du mail s'écrit 10:18. En anglais, l'application s'appelle 6MWT, abréviation anglaise du test de marche de 6 minutes ; sur un appareil en anglais, l'icône de l'écran d'accueil et son nom portent 6MWT. Le guide du premier test, la notice d'installation et l'exemple de compte rendu existent en anglais.

Deux corrections de mise en page pendant une titration sous oxygène pulsé : sur iPhone en paysage, l'écran Conditions ne dépasse plus la hauteur de l'écran et la source d'oxygène s'affiche en entier ; sur iPad en paysage, l'écran du test tient aussi, jusqu'au champ du nadir lu sur l'oxymètre, qui passait sous le bas de l'écran.

## 22 novembre 2026 — documentation en anglais

Les pages du dépôt (README, méthodes de calcul, notes de version) sont désormais en anglais, avec une version française liée en haut de chaque page.

## 22 novembre 2026 — corrections

Le rappel de la cote de Borg d'avant le test se lit sans parenthèses en double. Sur iPhone, la barre des étapes reste visible sous l'heure quand on fait défiler le bilan. Dans les réglages, choisir une option ne fait plus remonter la feuille tout en haut.

## 22 novembre 2026 — départ au milieu du couloir

Le patient peut partir ailleurs qu'à un plot, par exemple depuis une salle située au milieu du couloir. Un réglage indique la distance entre la ligne de départ et le premier plot atteint : le premier aller compte cette distance, les suivants la longueur du couloir, et le couloir dessiné montre la ligne de départ. Le compte rendu mentionne le départ, pour que le test puisse être refait sur le même parcours, comme le demande la norme ERS/ATS de 2014.

## 22 novembre 2026 — version web

L'application est désormais publiée comme application web installable : elle s'ouvre depuis Safari ou Chrome, s'ajoute à l'écran d'accueil et fonctionne sans réseau après la première ouverture. Elle n'a plus besoin d'être signée ni réinstallée chaque semaine. Hors de l'application iOS d'origine, l'écran reste allumé pendant le test grâce à la fonction de verrou d'écran du navigateur, les bips utilisent une session audio de lecture et le compte rendu est transmis par la feuille de partage du système.

## 13 octobre 2026

Le réglage de seuil de SpO2 est supprimé, de l'application comme du compte rendu. Sans SpO2 de repos, le compte rendu indique que la désaturation n'a pas pu être calculée au lieu de conclure à son absence ; les mesures prises pendant les arrêts sont tracées sur la figure. Le début du parcours est allégé : plus de marque « incomplet » sur les étapes, distance théorique affichée seulement une fois calculable, conditions du test saisies par listes déroulantes. Les indices exploratoires du bilan figurent dans le compte rendu, en tableau récapitulatif, avec leurs sources dans l'encart Méthodes.

## 12 octobre 2026

Conformité à la norme technique ERS/ATS de 2014 : repos de 15 minutes, consignes et encouragements standardisés, conduite à tenir pendant les arrêts, alerte de SpO2 sous 80 %, débit d'oxygène constant pendant un test de marche. Le nadir est la SpO2 la plus basse relevée pendant le test, arrêts compris, sans la valeur de repos, dans le bilan comme dans le compte rendu. Ajouts : compte rendu Word et envoi, sauvegarde et restauration du test en cours, titration de l'oxygène (paliers au repos, changements horodatés pendant la marche et pendant les arrêts), dispositifs d'oxygène pulsé mémorisés, score ODDS pour la fibrose pulmonaire idiopathique, mise en page pour iPhone en portrait et en paysage.

## 11 octobre 2026 — parcours guidé

Refonte complète de l'interface en parcours guidé de sept étapes pour l'iPad du service : retour possible à toute étape, chronomètre qui ne part qu'au départ, couloir dessiné, échelle de Borg en plein écran face au patient, récupération minutée, bilan avec figure, valeurs usuelles et indices exploratoires sourcés.

## 4 octobre 2026

Première version utilisée en service sur iPhone : comptage des allers, relevés minute par minute, compte rendu Word avec figure, envoi par mail, titration de l'oxygène.
