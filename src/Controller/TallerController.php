<?php

namespace App\Controller;
    
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;



class TallerController extends AbstractController
{

/**
     * @Route("/api/datosTaller", name="datosTaller")
     */
    public function datosTaller(Request $request, ManagerRegistry $doctrine) :Response {

        $id_plani = $request->get('id_plani');

        $em = $doctrine->getManager();
        $query = $em->createQuery(
            'SELECT t.NomTaller_Cat as nombre_taller, pt.DataTaller as fecha_taller, pt.NombreUsuarisMaxim as nombre_usuarios_por_taller, pt.Estat as estado_planificacion
            FROM App\Entity\Talleres t, App\Entity\PlanificacionTalleres pt
            WHERE pt.idPlanificacio = :id_plani and pt.TallerId = t.idTaller');
        $query->setParameter('id_plani', $id_plani);

        if ($td = $query->getResult()) {

            return new Response(json_encode($td));

        }else{
            return new Response('No hay registros!');
        }



        }
}