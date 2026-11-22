# Méthodes de calcul

Cette page décrit chaque valeur calculée par TM6 : sa formule, les données qu'elle utilise, la raison du choix et la source. Elle suit le code de l'application (`index.html`) ; en cas d'écart, c'est le code qui fait foi et cette page qui doit être corrigée.

Toutes les mesures viennent de la saisie de l'opérateur : SpO2 et FC lues sur l'oxymètre à chaque minute, à l'arrêt, pendant les pauses et pendant la récupération, heure de chaque passage à un plot, distance du dernier aller partiel. L'application ne reçoit aucun enregistrement continu de l'oxymètre. Les calculs se refont à chaque modification, et une valeur dont une donnée manque n'est pas affichée.

Deux mentions reviennent ci-dessous. **Choix clinique** désigne une règle décidée par le médecin responsable de l'application, et non tirée d'une publication. **Référence non vérifiée** signale une donnée qui n'a pas encore été contrôlée dans le texte de la source.

## Normes suivies

Le déroulé du test (consignes, encouragements, arrêts, alerte de SpO2) et la définition des mesures suivent la norme technique ERS/ATS de 2014, qui l'emporte sur l'énoncé de l'ATS de 2002 quand les deux textes divergent :

- Holland AE, Spruit MA, Troosters T, et al. An official European Respiratory Society/American Thoracic Society technical standard: field walking tests in chronic respiratory disease. *Eur Respir J* 2014;44:1428-46. doi:10.1183/09031936.00150314
- ATS Committee on Proficiency Standards for Clinical Pulmonary Function Laboratories. ATS statement: guidelines for the six-minute walk test. *Am J Respir Crit Care Med* 2002;166:111-7. doi:10.1164/ajrccm.166.1.at1102

## Distance parcourue

La distance est la somme des allers comptés et des mètres du dernier aller partiel, comme le demande la norme de 2014 (section *Recording performance of the 6MWT* : nombre d'allers, puis distance de l'aller final incomplet).

> distance = longueur du couloir × nombre d'allers + mètres partiels

Un aller est un passage à un plot. Quand le patient ne part pas d'un plot (par exemple depuis une salle au milieu du couloir), on règle la distance *d* entre la ligne de départ et le premier plot atteint. Le premier aller vaut alors *d*, et les suivants la longueur du couloir :

> distance = *d* + longueur du couloir × (nombre d'allers − 1) + mètres partiels

Tant qu'aucun plot n'est atteint, les mètres partiels se mesurent depuis la ligne de départ et ne peuvent pas dépasser *d*. La norme ne fixe pas l'emplacement de la ligne de départ. Elle demande en revanche de garder le même parcours d'un test à l'autre chez un même patient : c'est pourquoi le compte rendu mentionne le départ quand il n'est pas à un plot.

## Distance théorique et limite inférieure de la normale

TM6 utilise les équations d'Enright et Sherrill, établies chez 117 hommes et 173 femmes en bonne santé de 40 à 80 ans, pour des sujets qui font le test pour la première fois. La taille est en centimètres, le poids en kilogrammes et l'âge en années.

> homme : 7,57 × taille − 5,02 × âge − 1,76 × poids − 309
>
> femme : 2,11 × taille − 2,29 × poids − 5,78 × âge + 667

La limite inférieure de la normale (LIN) est la valeur théorique moins 153 m chez l'homme et 139 m chez la femme. Le pourcentage de la théorique est la distance parcourue divisée par la valeur théorique. Sans sexe, âge, taille ou poids, aucune valeur théorique n'est affichée. Hors de 40 à 80 ans, le compte rendu signale que l'âge sort de la population de référence.

- Source : Enright PL, Sherrill DL. Reference equations for the six-minute walk in healthy adults. *Am J Respir Crit Care Med* 1998;158:1384-7. doi:10.1164/ajrccm.158.5.9710086. Les équations ont été vérifiées sur le résumé de l'article.
- **Référence non vérifiée** : les valeurs de 153 et 139 m ne figurent pas dans le résumé. Elles concordent avec les calculateurs en ligne qui citent cet article, mais n'ont pas été lues dans son tableau.
- Pourquoi cette équation : c'est la plus utilisée. La norme de 2014 recommande, quand c'est possible, une équation établie dans la population locale ; des équations européennes plus récentes existent, et le choix reste ouvert.

**Interprétation dans la synthèse** (choix clinique) : « dans les limites de la normale » si la distance atteint la LIN, « diminuée » sinon.

## Vitesse de marche

> vitesse globale (km/h) = distance ÷ durée du test × 3,6
>
> vitesse pendant la marche (km/h) = distance ÷ (durée du test − durée des arrêts) × 3,6

La durée du test est 6 minutes, ou le temps écoulé jusqu'à l'arrêt définitif. Les arrêts sont horodatés par l'opérateur ; le chronomètre continue pendant les arrêts, comme le demande la norme de 2014.

La **vitesse de chaque aller**, tracée sur la figure, est la longueur de l'aller divisée par le temps de marche entre deux passages, arrêts exclus. Un aller de moins d'une seconde de marche n'est pas tracé. Le premier aller compte sa vraie longueur quand le départ n'est pas à un plot.

## SpO2

- **SpO2 la plus basse (nadir)** : la plus basse de toutes les valeurs relevées pendant le test, c'est-à-dire les relevés de chaque minute, la valeur à l'arrêt, les valeurs prises pendant les pauses et le nadir lu sur l'oxymètre s'il a été saisi. La valeur de repos en est exclue. La norme de 2014 retient la SpO2 la plus basse enregistrée pendant le test et recommande une oxymétrie continue ; ici, la valeur est lue et saisie par l'opérateur. Elle peut donc manquer une désaturation brève entre deux relevés.
- **Baisse de SpO2** : SpO2 de repos moins nadir, en points.
- **Désaturation significative** (choix clinique) : baisse d'au moins 4 points entre le repos et le nadir, sans condition sur la valeur la plus basse atteinte. Ce seuil est proche de celui du protocole d'évaluation de l'oxygénothérapie ambulatoire de la BTS (2015 : baisse d'au moins 4 % jusqu'à moins de 90 %), sans en reprendre la borne de 90 %. Ce n'est pas le critère réglementaire français de prescription d'oxygène.
- **Alerte** : une valeur saisie inférieure à 80 % déclenche l'alerte d'arrêt de la marche ; la reprise est possible quand la SpO2 remonte à 85 % ou plus (norme de 2014, section *Reasons for the assessor to stop an exercise test*).

## Fréquence cardiaque

- **FC la plus haute** : la plus haute des valeurs relevées pendant le test (relevés de chaque minute, arrêt, pauses), sans la valeur de repos.
- **FC de fin** : la valeur saisie à l'arrêt, ou à défaut le relevé de la dernière minute.
- **FMT théorique** (choix clinique) : 220 moins l'âge. La FC la plus haute est exprimée en pourcentage de cette valeur. C'est une convention ; elle n'est pas tirée d'une source citée dans l'application. La synthèse décrit la FC sans la juger.

## Échelle de Borg

La dyspnée et la fatigue sont cotées au repos et à la fin, sur l'échelle de Borg modifiée donnée par l'ATS de 2002 (tableau 2), présentée en plein écran au patient. L'application rappelle la cote de départ au moment de la cotation de fin. Aucune cote n'est calculée.

## Indices exploratoires

Ces indices sont descriptifs. Leurs repères ont été établis dans des populations précises, souvent une seule cohorte, et l'application n'en tire aucune conclusion. Le bilan les affiche avec leur formule et leur source. Le compte rendu les reprend en tableau, avec les sources dans l'encart Méthodes ; le score ODDS ne figure que dans le bilan. Un indice dont une donnée manque n'est pas affiché.

### Score ODDS (fibrose pulmonaire idiopathique seulement)

Score pronostique de décès ou d'hospitalisation pour cause respiratoire, sur 100 points, qui additionne quatre composantes :

| Composante | Points |
|---|---|
| Borg de dyspnée en fin de marche | > 5 : 19 ; de 2 à 5 : 3 ; < 2 : 0 |
| Débit d'oxygène continu | ≥ 3 L/min : 28 ; sinon 0 |
| Distance | < 300 m : 34 ; de 300 à 349 m : 26 ; de 350 à 449 m : 15 ; ≥ 450 m : 0 |
| SpO2 la plus basse | < 90 % : 19 ; sinon 0 |

Repère publié : un total d'au moins 28 points (sensibilité 85 %, spécificité 48 % dans la cohorte de validation) ; quartiles 0-18, 19-37, 38-56 et 57-100.

Plusieurs choix d'application ont été faits là où l'article ne tranche pas :
- une distance de 350 m ou de 450 m tombe dans la catégorie la plus favorable ;
- un débit supérieur à 6 L/min est compté 28 points, comme dans la cohorte de validation ;
- sous oxygène pulsé, le score n'est pas calculé, faute de débit convertible ;
- le Borg retenu est celui de fin de marche, l'article ne précisant pas le moment de la cotation ;
- le nadir est la SpO2 la plus basse relevée, lue à chaque minute.

- Source : Nathan SD, et al. *Eur Respir J* 2025;66:2402565. doi:10.1183/13993003.02565-2024. Le score est dérivé de 1 251 patients des essais ISABELA 1 et 2, et validé dans une cohorte monocentrique de 295 patients. L'article a été lu en entier, à l'exception du supplément.

### SpO2 à la 1re minute

> valeur relevée à 1 min

Dans la BPCO, une SpO2 passée sous 88 % en moins d'une minute est associée à la mortalité : 73 %, contre 38 % quand la désaturation survient plus tard et 28 % sans désaturation, chez 319 patients suivis 5,6 ans. Le critère exact est le délai avant 88 %, que l'application ne mesure pas : la valeur à 1 min n'en est qu'une approximation.

- Source : García-Talavera et al. *Lung* 2023. doi:10.1007/s00408-023-00613-x

### Désaturation moyenne

> SpO2 de repos − moyenne des relevés minute par minute (points)

Dans l'insuffisance cardiaque du sujet âgé, une désaturation moyenne d'au moins 6,7 % améliore la valeur pronostique de la distance (55 patients).

- Source : Sunayama et al. *Am J Physiol Heart Circ Physiol* 2024. doi:10.1152/ajpheart.00578.2024

### Réponse chronotrope

> FC la plus haute − FC de repos (/min)

Elle entre dans l'indice DSC proposé dans les pneumopathies interstitielles (Kchaou et al., *Sarcoidosis Vasc Diffuse Lung Dis* 2025, doi:10.36141/svdld.v42i1.13949). Elle n'est pas interprétable sous bêtabloquant.

- **Référence non vérifiée** : le repère affiché dans l'application (moins de 20 /min, associé à la survie dans les PID) est attribué à « Holland, 2013 ». Cette référence n'a pas été contrôlée.

### Indice chronotrope

> (FC de fin − FC de repos) ÷ (220 − âge − FC de repos)

Dans la cohorte COPDGene (BPCO), cet indice est associé aux exacerbations sévères, sans seuil publié.

- Source : Macdonald et al. *Respir Med* 2022. doi:10.1016/j.rmed.2022.106775

### Récupération de la FC à 1 minute

> FC de fin − FC relevée 1 minute après l'arrêt (/min)

La norme de 2014 associe une récupération réduite à un mauvais pronostic dans les PID et l'HTAP, sans seuil commun à toutes les maladies.

- HTAP : moins de 17 battements discrimine l'aggravation clinique (AUC 0,70, 102 patients). Source : Rezende et al., *PLoS One* 2022. doi:10.1371/journal.pone.0268839
- BPCO (COPDGene) : seuil optimal de 10 /min ou moins (AUC 0,62), avec une FC lue sur l'oxymètre en fin de marche puis après une minute assis, comme dans l'application. Source : Zhao et al., *Int J Chron Obstruct Pulmon Dis* 2021. doi:10.2147/COPD.S311572
- Dans l'HTP associée à la sarcoïdose, la récupération de la FC n'était pas pronostique (Gupta 2022, ci-dessous).

### Produit distance × saturation

> distance × SpO2 la plus basse ÷ 100 (m·%)

La norme de 2014 cite cet indice parmi les indices de désaturation proposés dans les PID, dont l'intérêt n'est pas confirmé. Dans l'HTP associée à la sarcoïdose, il n'était pas pronostique. Le nadir étant lu à chaque minute et non mesuré en continu, le produit est probablement surestimé.

- Source : Gupta et al. *Respir Med* 2022. doi:10.1016/j.rmed.2022.106801

### Travail de marche (6MWW)

> distance (km) × poids (kg), en kg·km

Selon la norme de 2014, il est mieux corrélé que la distance seule à la DLCO et au pic de consommation d'oxygène, et son utilité reste à caractériser. Il n'a pas de valeur de référence. Indice ajouté à la demande du médecin responsable, malgré l'ancienneté de la source.

- Source : Chuang et al. *Respir Med* 2001.
- **Référence non vérifiée** : les détails affichés dans l'application (BPCO, 33 hommes, moyenne de 27,5 kg·km) n'ont pas été relus dans l'article.

### Distance par minute

> pour chaque minute, distance cumulée à la fin de la minute − distance cumulée à son début

La distance cumulée entre deux passages aux plots est répartie au prorata du temps de marche, arrêts exclus, ce qui suppose une allure constante pendant chaque aller. La dernière minute contient les mètres partiels. C'est l'unité des études d'allure en neurologie ; il n'existe pas de repère dans les maladies respiratoires, et le sujet sain marche à allure presque constante.

- Source : Dalgas et al. *J Rehabil Med* 2014. doi:10.2340/16501977-1231 (sclérose en plaques, 80 patients ; antérieure à 2015, gardée parce que c'est la seule étude qui mesure la distance de chaque minute)

### Fatigabilité à la marche

> distance de la dernière minute ÷ distance de la 1re minute (%)

Indice des littératures neurologique et gériatrique, sans définition admise de référence, et sans repère dans les maladies respiratoires.

- Source : Van Geel et al. Measuring walking-related performance fatigability in clinical practice: a systematic review. *Eur J Phys Rehabil Med* 2019 (DOI non relevé).

### Variabilité de l'allure

> test découpé en trois tranches de 2 minutes : (vitesse de la tranche la plus rapide − vitesse de la plus lente) ÷ vitesse moyenne du test

Calculée seulement sur un test complet de 6 minutes. Dans la BPCO, une valeur d'au moins 0,39 est associée à la mortalité ou à l'hospitalisation à un an, dans une seule cohorte de 163 patients.

- Source : Huang et al. *Int J Chron Obstruct Pulmon Dis* 2023. doi:10.2147/COPD.S407708

### Vitesse, 1re puis 2e moitié

> moyenne des vitesses des allers dont le milieu tombe dans la 1re moitié du test, puis dans la 2e

Un ralentissement en fin de test est une piste de recherche, sans valeur de référence.

- Source : Lancaster (revue). *Multidiscip Respir Med* 2018. doi:10.1186/s40248-018-0158-z

## Ce que l'application ne calcule pas

Aucun débit d'oxygène n'est proposé ni « retenu », et aucun critère de prescription n'est appliqué (choix clinique). Les indices qui exigent un enregistrement continu de la SpO2 (temps passé sous 90 %, aire de désaturation) ne sont pas calculés, faute d'accès aux données de l'oxymètre.
