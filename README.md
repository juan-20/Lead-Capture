## Lead capture form

<div align="center">
    <img src="https://cdn.discordapp.com/attachments/1018246428369354844/1292827957425082409/lead.gif?ex=6705275c&is=6703d5dc&hm=47f62d7c1c4e87f9cb8b822a3d0316cfb0bb4d8bd54345380492ec9a3cf45b7a&"/>
</div>

#### Installation 

To install the dependencies:

```
npm install
```

after this you need to run the build. To do this you can follow the commands:
install serve in your machine to run the build
```
npm i -g serve
```
and then run the build
 ```
 cd build
serve -s build
 ```

#### Usage

After the instalation you can go to ```/public/index.html``` and open the file. The form should apper in the screen. To change the informations in the for you can edit the ```index.html ``` in the ```data-fields``` propery.


The compiled javaScript file for embedding is in  ```/build/static/js/main.b4c4489d.js```. The html is using this bundle to show all the information. To make an new build you need to run teh script:

```
npm run build
```
and change in the html the name of the file beign used.