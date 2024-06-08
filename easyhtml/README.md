## EasyHTML in Java !!
**_The OOP HTML_**

[Download](https://drive.google.com/file/d/16-1hhxZbPNS8SpH4bxGtDs1Pp6A1jMku/view?usp=drive_link)

### Html as object?!
Intuitive configuration with chaining and constructor
### Build quickly!
just uses the generate method
### Simple Use!
Click the link and add it to your package

## How to use?
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
