package be.glever.tests.ngbootoidc.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class HelloController implements BaseController{
    @RequestMapping("hello")
    public String hello(Principal principal){
        return "hello " + principal.getName();
    }
}
