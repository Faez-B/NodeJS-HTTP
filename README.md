# Evaluation Première Semaine NODE.JS

Vous allez créer un répo Privé — NodeJS HTTP Server sans Framework

Vous allez implémenter dans ce TP noté un serveur HTTP en node.js sans utiliser de modules tiers.

Tout au long du TP vous devez remplacer les balises `{{TEXTE ADEQUAT}}` par le texte adéquat. 

Une fois votre travail terminé, depuis votre repo GITHUB téléchargez le contenu du repo comme une archive puis:

1. renommez là `H3_M1WEB2023_TP_NODE_1_{{NOM}}_{{PRENOM}}.{{EXTENSION}}`
2. envoyez là par mail à l’adresse : `remiconnesson3@gmail.com` 

## Méthode de travail incluant GIT & GITHUB (5 points)

Pour obtenir les points à chacune des questions suivantes vous devez utiliser ces bonnes pratiques tout au long de l’évaluation.

1. 1 POINT — Chacun de vos messages de commit est clair, bien formulé et réprésente les changements apportés (min. plus de 6 mots)
2. 1 POINT — Chacun de vos commits est atomique 
3. 1 POINT — Pour l’implémentation de chaque question vous avez bien créé une branche de dev où vous allez développer l’implémentation de la question. *(`main` ne doit contenir que des étapes stables du TP, représenté ici par des questions.)*
4. 1 POINT — Lorsque vous avez réussi avec succès l’implémentation d’une question sur une branche, vous la remergez SANS FASTFORWARD sur la branche `main`.
5. 1 POINT — Lorsque vous avez terminé une section vous allez appliqué un TAG au commit de merge. v1 quand vous avez terminé la section n°1, v2 pour quand vous avez terminé la section n°2 etc.. 

<aside>
⚠️ Travaillez de manière méthodique et propre en vérifiant bien que ce que vous allez commit et que votre code fait ce que vous en attendant avant chaque commit pour maximiser le nombre de points obtenus.

</aside>

Les sections doivent être réalisées dans l’ordre.

## SECTION 1 — Créer le squelette du serveur

Q1. 1 POINT — Grace au module `http` implémenter un serveur qui écoute sur le port 5000 retourne juste `"HELLO WORLD {{VOTRE PRENOM}}"` en remplaçant `{{VOTRE PRENOM}}` par votre prénom. 

Q2. 1 POINT — Remplacez la logique de Lorsque le client visite la route `/` avec la méthode `GET` retournez le status code adéquat et le contenu HTML suivant `<h1>HELLO WORLD {{VOTRE PRENOM}} !</h1>` 

Q3. 1 POINT — Si le client visite la route `/` avec une méthode autre que `GET` retournez le status code adéquat avec le contenu HTML suivant `<h1>{{STATUS CODE}} Méthode non authorisée</h1>`

Q4. 1 POINT — Si le client visite une route qui n’est pas défini alors retournez le status code adéquat avec le contenu HTML suivant `<h1>{{STATUS CODE}} Page Introuvable</h1>`

Q5. 1 POINT — Dans le cas où une erreur interne au serveur venez à arriver, englobez la logique de votre serveur pour attraper tout exception qui aurait été jetée et à la place que le serveur s’arrête :  retournez le status code adéquat avec le contenu HTML suivant `<h1>{{STATUS CODE}} Erreur Interne au Serveur </h1>`

## SECTION 2 — Servir des fichiers depuis votre serveur

Q6. 1 POINT — Créez un dossier `public` dans leque vous allez créez un dossier `pages` et créez un fichier HTML `{{NOM_ADEQUAT}}.html`  **pour chaque** contenu HTML que vous avez renvoyé lors de la section précédente. Pour chaque question de la section précédente qui renvoit un contenu HTML, vous devez lire puis retourner le contenu du fichier.
note: Le fichier pour la route  `GET /` doit s’appeller `index.html`

Q7. 1 POINT — Télécharger une image que vous allez inclure dans le dossier `public/images` et la renommer `image.{{EXTENSION}}`. Modifier votre fichier `index.html` pour qu’il inclut cette image. Puis créez la route `/public/images/image.{{EXTENSION}}` qui sur GET retourne le contenu du fichier de l’image avec le status code adequat et le content-type adequat.

Q8. 1 POINT — Créer un fichier `style.css` qui modifie la couleur des H1 en bleu rangez le dans le dossier que vous allez créer `/public/css/`. Modifier votre fichier `index.html` pour qu’il inclut cette feuille de style. Puis créez la route `/public/css/style.css` qui sur GET retourne le contenu du fichier de l’image avec le status code adequat et le content-type adequat.

Q9. 1 POINT — Créer un fichier `script.js` qui créée une alert du message `“Hello world”` rangez le dans le dossier que vous allez créer `/public/js/`. Modifier votre fichier `index.html` pour qu’il execute ce script dans le body. Puis créez la route `/public/js/script.css` qui sur GET retourne le contenu du script avec le status code adequat et le content-type adequat.

## SECTION 3 — Refactorisation du système de service de fichiers statiques

Comme ce n’est pas pratique de devoir créer une route pour chaque fichier statique nous allons refactoriser le code pour créer une route qui va automatiquement gérer le service de fichiers d’images, de css et de javascript.

Q10. 1 POINTS — Renommer le dossier `public/images` en `public/{{EXTENSION}}` où vous remplacerez la balises par le nom, en minuscule, de l’extension de votre image téléchargée à la question 8. (NOTE utilisez git mv pour changer le nom afin de conserver vos points sur l

Créer une route qui sur `GET /public/{{NOM_FICHIER}}.{{EXTENSION}}` va essayer d’aller le lire le fichier rangé au chemin `public/{{EXTENSION}}/{{NOM_FICHIER}}.{{EXTENSION}}` , puis le renvoyer avec le content type et le status code adéquat.

## Méthode de travail — Envoyer et Recevoir du JSON via méthodes POST

Rappel: le snippet pour gérer la réception de contenu JSON se trouve ici [https://nodejs.dev/learn/get-http-request-body-data-using-nodejs](https://nodejs.dev/learn/get-http-request-body-data-using-nodejs)

```jsx
// ... code omis 
const server = http.createServer((req, res) => {
	// ... code omis ...
  if (routeCondition) { 
		// ici démarrer votre route
		let data = '';
	  req.on('data', chunk => {
	    data += chunk;
	  });
	  req.on('end', () => {
	    data = JSON.parse(data); // ici vous récupérez le JSON sous forme d'un objet Javascript 
			// INCLURE VOTRE LOGIQUE DE ROUTE ICI
	    res.end(); // ici termine votre route
	  });
	}
});
// ... code omis 
```

Pour travailler avec du JSON et effectuer des requêtes POST et lire des réponses POST vous pouvez : 

- depuis une interface graphique vous pouvez utiliser un utilitaire desktop comme POSTMAN, (seulement si vous connaissez déjà)
- depuis la command line et effectuer des requêtes POST :
    - vous pouvez utiliser soit curl (seulement si vous connaissez déjà)

MAIS **JE VOUS RECOMMANDE httpie,** qui fonctionne depuis la ligne de commande et que vous pouvez installer dans votre subsystem linux avec `sudo apt-get install httpie`

httpie est plus simple que CURL pour notre usage (ex: [https://httpie.io/docs/cli/optional-get-and-post](https://httpie.io/docs/cli/optional-get-and-post) .)

Pour notre usage, pour envoyer le nombre 2 ainsi qu’un champ clef/valeur arbitraire à notre serveur `http POST localhost:5000/{{endpoint}} nombre=2 {{CLEF}}={{VALEUR}}`

Vous aurez besoin de cette méthode du module de base JSON: [https://www.w3schools.com/js/js_json_stringify.asp](https://www.w3schools.com/js/js_json_stringify.asp)

Vous aurez aussi besoin des HASHMAPS JS, les `Map` : [https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map#exemples](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map#exemples)

## Section 4 — Votre première CRUD API

Créer une DB en mémoire avec un système de clef primaire qui s’incrémente toujours de un

```jsx
const memoryDb = new Map(); // est global
let id = 0; // doit être global
memoryDb.set(id++, {nom: "Alice"}) // voici comment set une nouvelle entrée.
memoryDb.set(id++, {nom: "Bob"})
memoryDb.set(id++, {nom: "Charlie"})
```

Q11. 1 POINT — Créer aussi une route `GET /api/names` qui retourne l’intégralité de la database sous forme de JSON. Vous pouvez utiliser par exemple : [https://stackoverflow.com/a/53461519](https://stackoverflow.com/a/53461519) pour faire ce peu

Q12. 1 POINT — Créer une route `GET /api/name/{{id}}` qui retourne en JSON l’objet d’ID `{{id}}` avec le status code et le content type adequat. 

Q13. 1 POINT — Créer une route `POST /api/names` qui accepte un objet `{ name: {{payload}} }` et l’intégre à la base de donnée avec un ID unique. Renvoyez le status code et la réponse adequat.

Q14. 1 POINT — Implémentez `DELETE /api/name/{{id}}` et `PUT /api/name/{{id}}` qui vont respectivement supprimer et modifier l’objet d’ID `{{id}}` et retournez le status code et le content type adequat.

Q15. 1 POINT — Gérer les cas où on essaye d’accéder à une ressource dont l’ID n’existe pas ou n’existe plus.