<?php

namespace App\Controller;
    
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
    
class DefaultController extends AbstractController
{
   /**
 * @Route("/{reactRouting}", name="index", defaults={"reactRouting": null})
 */
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }


      /**
 * @Route("/taller/{reactRouting}", name="taller", defaults={"reactRouting": null})
 */
public function taller(): Response
{
    return $this->render('default/index.html.twig');
}
    /**
 * @Route("/taller/{nombreTaller}/plani/{reactRouting}", name="plani", defaults={"reactRouting": null})
 */
public function plani(): Response
{
    return $this->render('default/index.html.twig');
}
}