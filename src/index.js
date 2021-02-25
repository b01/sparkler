// import the Spark JavaScript
import spark from "@sparkdesignsystem/spark/es5/spark";
import sparkPrerender from "@sparkdesignsystem/spark/es5/sparkPrerender";
// optional (see below)
import "@sparkdesignsystem/spark/es5/sparkPolyfills";
// import the Spark CSS
import "@sparkdesignsystem/spark-styles/_spark.scss";
// // initialize Spark
sparkPrerender();
spark();

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello, Spark! JavaScript is working!';
    return element;
}
document.body.appendChild(component());
