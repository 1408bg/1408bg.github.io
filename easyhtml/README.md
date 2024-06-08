## EasyHTML in Java !!
**_The OOP HTML_**

[Download](https://drive.google.com/file/d/16-1hhxZbPNS8SpH4bxGtDs1Pp6A1jMku/view?usp=drive_link)

_ver : **Proto 1**_

### Html as object?!
Intuitive configuration with chaining and constructor
### Build quickly!
just uses the generate method
### Simple Use!
Click the link and add it to your package

## How to use?
_Based on Proto 1 version_
### In Create a file
```java
public class Main {
  public static void main(String[] args) {
    EasyHTML.generate(new CounterApp(), "test");
  }
  static final class CounterApp extends HTML {
    CounterApp(){
      HTML root = this; // This object is the root of your html.

      Head head = new Head(); // Head is head of your html.

      Title title = new Title("MyApp"); // As you can see, it's just a title.
      Style style = new Style( // Style is the theme of your html, just css.
        new InlineStyle( // There are normal css syntax.
          "* { margin: 0px; padding: 0px; }",
          "body { overflow: hidden; width: 100vw; height: 100vh; }",
          "header { width: 100vw; height: 50px; background-color: black; color: white; }",
          "header > p { margin-left: 50px; line-height: 50px; font-size: 22px; } ",
          "section { width: 100vw; height: 300px; display: flex; flex-direction: row; justify-content: center; align-items: center; }",
          ".clickCounter {  display: inline-block; width: 100px; height: 20px; font-size: 20px; font-weight: bold; }",
          ".FloatingActionButton { position: absolute; bottom: 50px; right: 50px; width: 50px; height: 50px; background-color: skyblue; border-radius: 15px; border: none; cursor: pointer; font-size: 30px; }"
        )
      );
      head // The properties now apply to the head.
        .setTitle(title)
        .setStyle(style);

      Body body = new Body(); // Body is the real page of your html.
      Header header = new Header(); // It's time to define the layout
      header.addChildren( // Add one or more child elements.
        new P("CounterApp")
      );
      Section section = new Section(); // There are key elements in the section.
      Div counterWrapper = new Div( // Div is a content element that can have multiple child elements.
        new Span("You have pushed the button this many times : "),
        new Span("").setClass("clickCounter"),
        new Button(
          "+",
          new InlineJavaScript("setState('.clickCounter', i += 1)"))
          .setClass("FloatingActionButton")
      );
      section.addChildren( // Layout has no hesitation in becoming a child when it comes to content elements.
        counterWrapper
      );

      body.setLayout( // It's time to apply the layouts that have been set up.
        header,
        section
      );

      root // Finally, assign two elements of html.
        .setHead(head)
        .setBody(body)
        .useState("i = 0"); // It's a variable. Let's see how it's used
    }
  }
}
```
### In Spring Boot
```java
@RestController
public class MyController {
  @GetMapping("/")
  public String index() {
    return new MyHTML("world").toString();
  }
  @GetMapping("/{message}")
  public String message(@PathVariable String message) {
    return new MyHTML(message).toString();
  }
}

class MyHTML extends HTML {
  MyHTML(String value){
    this.setHead(
      new Head()
        .setTitle(new Title("My Web"))
        .setStyle(new Style(
          new InlineStyle(
      "* { margin: 0px; padding: 0px; }",
            "header { width: 100vw; height: 50px; background-color: black; color: white; text-align: center; line-height: 50px; }",
            "section { width: 100vw; height: 300px; }",
            "section > * { margin: 20px; }",
            ".title { font-size: 20px; font-weight: bold; }"
          )
        ))
    ).setBody(
      new Body()
        .setLayout(
          new Header()
            .addChildren(
              new P("Hello "+value+"!").setClass("title")
            ),
          new Section()
            .addChildren(
              new Span("Welcome "+value+"!")
            )
        )
    );
  }
}
```
