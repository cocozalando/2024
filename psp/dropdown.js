function getSubChannel(){

            var list1 = document.getElementById('channel');
            var list2 = document.getElementById('subchannel');
            var list1SelectedValue = list1.options[list1.selectedIndex].value;

            if (list1SelectedValue=='001')
            {
                list2.options.length=0;

                list2.options[1] = new Option('affiliate', '01');
            }
            

            else if (list1SelectedValue=='002')
            {

                list2.options.length=0;

                list2.options[1] = new Option('display', '01');
                list2.options[2] = new Option('direct deals', '02');
                list2.options[3] = new Option('google gdn (no use)', '03');
                list2.options[4] = new Option('google youtube (no use)', '04');
                list2.options[5] = new Option('direct buys (no use)', '05');
                list2.options[6] = new Option('other', '06');
                list2.options[7] = new Option('audio', '07');
                list2.options[8] = new Option('ooh', '08');
                list2.options[9] = new Option('tv', '09');

            }



            else if (list1SelectedValue=='003')
            {

                list2.options.length=0;
                
                list2.options[1] = new Option('meta', '01');
                list2.options[2] = new Option('snap', '02');
                list2.options[3] = new Option('tiktok', '03');
                list2.options[4] = new Option('x (twitter)', '04');
                list2.options[5] = new Option('pinterest', '05');
                list2.options[6] = new Option('other', '06');

             
                
            }

      
            else if (list1SelectedValue=='004')
            {

                list2.options.length=0;

                list2.options[1] = new Option('digital radio', '01');
           


            }

            else if (list1SelectedValue=='005')
            {

                list2.options.length=0;

                list2.options[1] = new Option('digital tv', '01');


            }

            else if (list1SelectedValue=='006')
            {

                list2.options.length=0;

                list2.options[1] = new Option('cinema', '01');

            }

            else if (list1SelectedValue=='007')
            {

                list2.options.length=0;

                list2.options[1] = new Option('classic ooh', '01');
                list2.options[2] = new Option('digital ooh', '02');
                list2.options[3] = new Option('special formats', '03');


            }

            else if (list1SelectedValue=='008')
            {

                list2.options.length=0;

                list2.options[1] = new Option('classic radio', '01');

            }

       
            else if (list1SelectedValue=='009')
            {

                list2.options.length=0;

                list2.options[1] = new Option('mkt. driven collab.', '01');
        

            }


            else if (list1SelectedValue=='010')
            {

                list2.options.length=0;

                list2.options[1] = new Option('mkt. driven events', '01');
                        
            }

            else if (list1SelectedValue=='011')
            {

                list2.options.length=0;

                list2.options[1] = new Option('print', '01');
                list2.options[2] = new Option('digital print', '02');
            
            }

            else if (list1SelectedValue=='012')
            {

                list2.options.length=0;

                list2.options[1] = new Option('classic tv', '01');
                
            }

            else if (list1SelectedValue=='013')
            {

                list2.options.length=0;

                list2.options[1] = new Option('consumer events', '01');
                list2.options[2] = new Option('showroom', '02');
                list2.options[3] = new Option('partner events', '03');
                list2.options[4] = new Option('cast celebr. events', '04');

            }

            else if (list1SelectedValue=='014')
            {

                list2.options.length=0;

                list2.options[1] = new Option('media/journalists', '01');
                list2.options[2] = new Option('media collab.', '02');
                list2.options[3] = new Option('partnerships', '03');
                        
            }


            else if (list1SelectedValue=='015')
            {

                list2.options.length=0;

                list2.options[1] = new Option('influencer collab.', '01');
                        
            }

            else if (list1SelectedValue=='016')
            {

                list2.options.length=0;

                list2.options[1] = new Option('facebook', '01');
                list2.options[2] = new Option('instagram', '02');
                list2.options[3] = new Option('pinterest', '03');
                list2.options[4] = new Option('tiktok', '04');
                list2.options[5] = new Option('youtube', '05');
                list2.options[6] = new Option('meta', '06');
                list2.options[7] = new Option('other', '07');


            }

            else if (list1SelectedValue=='017')
            {

                list2.options.length=0;

                list2.options[1] = new Option('gc b2b', '01');
                list2.options[2] = new Option('gc retail', '02');
                list2.options[3] = new Option('gc b2c', '03');

            }
            
             else if (list1SelectedValue=='018')
            {

                list2.options.length=0;

                list2.options[1] = new Option('crm', '01');


            }


            else if (list1SelectedValue=='019')
            {

                list2.options.length=0;

                list2.options[1] = new Option('market research', '01');

            }
            
            
             else if (list1SelectedValue=='020')
            {

                list2.options.length=0;

                list2.options[1] = new Option('local production', '01');
                list2.options[2] = new Option('cast celebr. prod.', '02');
                list2.options[3] = new Option('music', '03');
                list2.options[4] = new Option('extension rights', '04');
                list2.options[5] = new Option('event prod./licensing fee', '05');
                list2.options[6] = new Option('influencer collab. prod', '06');
                list2.options[7] = new Option('talent prod.', '07');
                list2.options[8] = new Option('post production', '08');

            }

            else if (list1SelectedValue=='021')
            {

                list2.options.length=0;

                list2.options[1] = new Option('content', '01');
                list2.options[2] = new Option('zstudios', '02');
                list2.options[3] = new Option('social media prod.', '03');
                        
            }

            else if (list1SelectedValue=='022')
            {

                list2.options.length=0;

                list2.options[1] = new Option('media agency fees', '01');
                list2.options[2] = new Option('consumer pr agency fees', '02');
                list2.options[3] = new Option('social media agency fees', '03');
                list2.options[4] = new Option('giftcards agency fees', '04');
                list2.options[5] = new Option('creative local agency fees', '05');
                list2.options[6] = new Option('creative global agency fees', '06');
                list2.options[7] = new Option('creative global production fees', '07');

            }

            else if (list1SelectedValue=='023')
            {

                list2.options.length=0;

                list2.options[1] = new Option('design&visual id', '01');
                list2.options[2] = new Option('tech/product', '02');
                list2.options[3] = new Option('media tech partner', '03');
                        
            }

            else if (list1SelectedValue=='024')
            {

                list2.options.length=0;

                list2.options[1] = new Option('strategic setup', '01');
                list2.options[2] = new Option('brand identity proj.', '02');

            }

            else if (list1SelectedValue=='025')
            {

                list2.options.length=0;

                list2.options[1] = new Option('google search', '01');
                list2.options[2] = new Option('apple', '02');
                list2.options[3] = new Option('other', '03');
                        
            }

            else if (list1SelectedValue=='026')
            {

                list2.options.length=0;

                list2.options[1] = new Option('meta', '01');
                list2.options[2] = new Option('snap', '02');
                list2.options[3] = new Option('tiktok', '03');
                list2.options[4] = new Option('other', '04');

            }

            else if (list1SelectedValue=='027')
            {

                list2.options.length=0;

                list2.options[1] = new Option('google gdn', '01');
                list2.options[2] = new Option('google youtube', '02');
                list2.options[3] = new Option('google uac', '03');
                list2.options[4] = new Option('other', '04');

            }

            else if (list1SelectedValue=='028')
            {

                list2.options.length=0;

                list2.options[1] = new Option('seo', '01');

            }

            else if (list1SelectedValue=='029')
            {

                list2.options.length=0;

                list2.options[1] = new Option('tooling', '01');

            }

            else if (list1SelectedValue=='030')
            {

                list2.options.length=0;

                list2.options[1] = new Option('innovation budget', '01');

            }

            else if (list1SelectedValue=='031')
            {

                list2.options.length=0;

                list2.options[1] = new Option('wkz', '01');

            }

            else if (list1SelectedValue=='032')
            {

                list2.options.length=0;

                list2.options[1] = new Option('accounting effects', '01');
                        
            }

            else if (list1SelectedValue=='033')
            {

                list2.options.length=0;

                list2.options[1] = new Option('other zms campaigns', '01');

            }

            else if (list1SelectedValue=='034')
            {

                list2.options.length=0;

                list2.options[1] = new Option('creative lab', '01');

            }

            else if (list1SelectedValue=='035')
            {

                list2.options.length=0;

                list2.options[1] = new Option('global ots', '01');

            }

            else if (list1SelectedValue=='036')
            {

                list2.options.length=0;

                list2.options[1] = new Option('tbd', '01');

            }

            else if (list1SelectedValue=='037')
            {

                list2.options.length=0;

                list2.options[1] = new Option('direct buys', '01');

            }


}
