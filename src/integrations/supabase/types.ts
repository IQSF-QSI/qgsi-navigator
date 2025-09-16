export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      academic_sources: {
        Row: {
          abstract: string | null
          doi_url: string | null
          extracted_claim: string | null
          id: number
          journal: string | null
          publication_year: number | null
          status: string
          title: string
          trust_score: number | null
        }
        Insert: {
          abstract?: string | null
          doi_url?: string | null
          extracted_claim?: string | null
          id?: number
          journal?: string | null
          publication_year?: number | null
          status?: string
          title: string
          trust_score?: number | null
        }
        Update: {
          abstract?: string | null
          doi_url?: string | null
          extracted_claim?: string | null
          id?: number
          journal?: string | null
          publication_year?: number | null
          status?: string
          title?: string
          trust_score?: number | null
        }
        Relationships: []
      }
      activity_log: {
        Row: {
          agent_name: string | null
          id: number
          log_level: string | null
          message: string | null
          timestamp: string
        }
        Insert: {
          agent_name?: string | null
          id?: number
          log_level?: string | null
          message?: string | null
          timestamp?: string
        }
        Update: {
          agent_name?: string | null
          id?: number
          log_level?: string | null
          message?: string | null
          timestamp?: string
        }
        Relationships: []
      }
      agent_functions: {
        Row: {
          api_endpoint: string | null
          category: string | null
          created_at: string | null
          description: string | null
          function_id: string
          function_type: string | null
          id: number
          implementation: string | null
          name: string
          parameters: Json | null
          permissions: string[] | null
          rate_limit: string | null
          returns: Json | null
        }
        Insert: {
          api_endpoint?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          function_id: string
          function_type?: string | null
          id?: never
          implementation?: string | null
          name: string
          parameters?: Json | null
          permissions?: string[] | null
          rate_limit?: string | null
          returns?: Json | null
        }
        Update: {
          api_endpoint?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          function_id?: string
          function_type?: string | null
          id?: never
          implementation?: string | null
          name?: string
          parameters?: Json | null
          permissions?: string[] | null
          rate_limit?: string | null
          returns?: Json | null
        }
        Relationships: []
      }
      agent_permissions: {
        Row: {
          agent_name: string
          allowed_functions: string[] | null
          created_at: string | null
          department: string | null
          id: number
          permission_level: string | null
          restricted_functions: string[] | null
        }
        Insert: {
          agent_name: string
          allowed_functions?: string[] | null
          created_at?: string | null
          department?: string | null
          id?: never
          permission_level?: string | null
          restricted_functions?: string[] | null
        }
        Update: {
          agent_name?: string
          allowed_functions?: string[] | null
          created_at?: string | null
          department?: string | null
          id?: never
          permission_level?: string | null
          restricted_functions?: string[] | null
        }
        Relationships: []
      }
      agents: {
        Row: {
          created_at: string | null
          department: string | null
          id: number
          name: string
          role: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          id?: never
          name: string
          role?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string | null
          id?: never
          name?: string
          role?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      annual_reports: {
        Row: {
          country_id: number
          healthcare_summary: string | null
          id: number
          laws_summary: string | null
          methodology_version_id: number
          rank: number | null
          report_year: number
          social_summary: string | null
          summary: string | null
          total_score: number | null
        }
        Insert: {
          country_id: number
          healthcare_summary?: string | null
          id?: number
          laws_summary?: string | null
          methodology_version_id: number
          rank?: number | null
          report_year: number
          social_summary?: string | null
          summary?: string | null
          total_score?: number | null
        }
        Update: {
          country_id?: number
          healthcare_summary?: string | null
          id?: number
          laws_summary?: string | null
          methodology_version_id?: number
          rank?: number | null
          report_year?: number
          social_summary?: string | null
          summary?: string | null
          total_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "annual_reports_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annual_reports_methodology_version_id_fkey"
            columns: ["methodology_version_id"]
            isOneToOne: false
            referencedRelation: "methodology_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          changed_at: string | null
          changed_by: string | null
          id: number
          new_data: Json | null
          old_data: Json | null
          operation_type: string
          record_id: number
          table_name: string
        }
        Insert: {
          changed_at?: string | null
          changed_by?: string | null
          id?: number
          new_data?: Json | null
          old_data?: Json | null
          operation_type: string
          record_id: number
          table_name: string
        }
        Update: {
          changed_at?: string | null
          changed_by?: string | null
          id?: number
          new_data?: Json | null
          old_data?: Json | null
          operation_type?: string
          record_id?: number
          table_name?: string
        }
        Relationships: []
      }
      authors: {
        Row: {
          affiliation: string | null
          bio: string | null
          email: string | null
          id: number
          name: string
          orcid: string | null
          user_id: number | null
        }
        Insert: {
          affiliation?: string | null
          bio?: string | null
          email?: string | null
          id?: number
          name: string
          orcid?: string | null
          user_id?: number | null
        }
        Update: {
          affiliation?: string | null
          bio?: string | null
          email?: string | null
          id?: number
          name?: string
          orcid?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "authors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      brand_assets: {
        Row: {
          asset_type: string
          id: number
          name: string
          value: string
        }
        Insert: {
          asset_type: string
          id?: number
          name: string
          value: string
        }
        Update: {
          asset_type?: string
          id?: number
          name?: string
          value?: string
        }
        Relationships: []
      }
      cities: {
        Row: {
          country_id: number
          id: number
          name: string
          population: number | null
        }
        Insert: {
          country_id: number
          id?: number
          name: string
          population?: number | null
        }
        Update: {
          country_id?: number
          id?: number
          name?: string
          population?: number | null
        }
        Relationships: []
      }
      communications: {
        Row: {
          body: string | null
          channel: string
          communication_date: string | null
          direction: string
          id: number
          pipeline_id: number
          sentiment: string | null
          status: string
          subject: string | null
        }
        Insert: {
          body?: string | null
          channel: string
          communication_date?: string | null
          direction: string
          id?: number
          pipeline_id: number
          sentiment?: string | null
          status?: string
          subject?: string | null
        }
        Update: {
          body?: string | null
          channel?: string
          communication_date?: string | null
          direction?: string
          id?: number
          pipeline_id?: number
          sentiment?: string | null
          status?: string
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "communications_pipeline_id_fkey"
            columns: ["pipeline_id"]
            isOneToOne: false
            referencedRelation: "engagement_pipeline"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_log: {
        Row: {
          action: string
          agent_name: string
          details: Json | null
          id: number
          timestamp: string | null
        }
        Insert: {
          action: string
          agent_name: string
          details?: Json | null
          id?: number
          timestamp?: string | null
        }
        Update: {
          action?: string
          agent_name?: string
          details?: Json | null
          id?: number
          timestamp?: string | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          flag_emoji: string | null
          id: number
          is_active: boolean
          iso_code_2: string
          name: string
          region: string | null
        }
        Insert: {
          flag_emoji?: string | null
          id?: number
          is_active?: boolean
          iso_code_2: string
          name: string
          region?: string | null
        }
        Update: {
          flag_emoji?: string | null
          id?: number
          is_active?: boolean
          iso_code_2?: string
          name?: string
          region?: string | null
        }
        Relationships: []
      }
      country_data_points: {
        Row: {
          country_id: number
          created_by: string | null
          id: number
          metric_id: number
          report_year: number
          score: number
          source_url: string | null
          updated_at: string | null
        }
        Insert: {
          country_id: number
          created_by?: string | null
          id?: number
          metric_id: number
          report_year: number
          score: number
          source_url?: string | null
          updated_at?: string | null
        }
        Update: {
          country_id?: number
          created_by?: string | null
          id?: number
          metric_id?: number
          report_year?: number
          score?: number
          source_url?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "country_data_points_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "country_data_points_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "metrics"
            referencedColumns: ["id"]
          },
        ]
      }
      data_map: {
        Row: {
          column_name: string | null
          gdpr_legal_basis: string | null
          id: number
          pii_type: string | null
          table_name: string | null
        }
        Insert: {
          column_name?: string | null
          gdpr_legal_basis?: string | null
          id?: number
          pii_type?: string | null
          table_name?: string | null
        }
        Update: {
          column_name?: string | null
          gdpr_legal_basis?: string | null
          id?: number
          pii_type?: string | null
          table_name?: string | null
        }
        Relationships: []
      }
      datasets: {
        Row: {
          author_id: number | null
          description: string | null
          id: number
          license: string | null
          link: string | null
          paper_id: number | null
          title: string
        }
        Insert: {
          author_id?: number | null
          description?: string | null
          id?: number
          license?: string | null
          link?: string | null
          paper_id?: number | null
          title: string
        }
        Update: {
          author_id?: number | null
          description?: string | null
          id?: number
          license?: string | null
          link?: string | null
          paper_id?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "datasets_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "datasets_paper_id_fkey"
            columns: ["paper_id"]
            isOneToOne: false
            referencedRelation: "papers"
            referencedColumns: ["id"]
          },
        ]
      }
      dev_tasks: {
        Row: {
          assigned_by: string | null
          created_at: string | null
          id: number
          related_asset_id: number | null
          status: string
          task_description: string | null
        }
        Insert: {
          assigned_by?: string | null
          created_at?: string | null
          id?: number
          related_asset_id?: number | null
          status?: string
          task_description?: string | null
        }
        Update: {
          assigned_by?: string | null
          created_at?: string | null
          id?: number
          related_asset_id?: number | null
          status?: string
          task_description?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dev_tasks_related_asset_id_fkey"
            columns: ["related_asset_id"]
            isOneToOne: false
            referencedRelation: "brand_assets"
            referencedColumns: ["id"]
          },
        ]
      }
      editorial_board: {
        Row: {
          bio: string | null
          contact: string | null
          id: number
          name: string | null
          title: string | null
        }
        Insert: {
          bio?: string | null
          contact?: string | null
          id?: number
          name?: string | null
          title?: string | null
        }
        Update: {
          bio?: string | null
          contact?: string | null
          id?: number
          name?: string | null
          title?: string | null
        }
        Relationships: []
      }
      engagement_pipeline: {
        Row: {
          agent_notes: string | null
          id: number
          stage: string
          stakeholder_id: number
          status_updated_at: string | null
        }
        Insert: {
          agent_notes?: string | null
          id?: number
          stage?: string
          stakeholder_id: number
          status_updated_at?: string | null
        }
        Update: {
          agent_notes?: string | null
          id?: number
          stage?: string
          stakeholder_id?: number
          status_updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "engagement_pipeline_stakeholder_id_fkey"
            columns: ["stakeholder_id"]
            isOneToOne: false
            referencedRelation: "stakeholders"
            referencedColumns: ["id"]
          },
        ]
      }
      identity_tags: {
        Row: {
          id: number
          tag_name: string
        }
        Insert: {
          id?: number
          tag_name: string
        }
        Update: {
          id?: number
          tag_name?: string
        }
        Relationships: []
      }
      knowledge_base: {
        Row: {
          content: string
          country_id: number | null
          embedding: string | null
          id: number
          source_type: string | null
          source_url: string | null
        }
        Insert: {
          content: string
          country_id?: number | null
          embedding?: string | null
          id?: never
          source_type?: string | null
          source_url?: string | null
        }
        Update: {
          content?: string
          country_id?: number | null
          embedding?: string | null
          id?: never
          source_type?: string | null
          source_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_base_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      location_data_points: {
        Row: {
          academic_source_id: number | null
          country_id: number
          id: number
          metric_id: number
          notes: string | null
          report_year: number
          score: number
          status: string
        }
        Insert: {
          academic_source_id?: number | null
          country_id: number
          id?: number
          metric_id: number
          notes?: string | null
          report_year: number
          score: number
          status?: string
        }
        Update: {
          academic_source_id?: number | null
          country_id?: number
          id?: number
          metric_id?: number
          notes?: string | null
          report_year?: number
          score?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "location_data_points_academic_source_id_fkey"
            columns: ["academic_source_id"]
            isOneToOne: false
            referencedRelation: "academic_sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_data_points_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_data_points_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "metrics"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_content: {
        Row: {
          brief: string | null
          content_body: string | null
          id: number
          status: string
          target_keyword_id: number | null
          title: string | null
        }
        Insert: {
          brief?: string | null
          content_body?: string | null
          id?: number
          status?: string
          target_keyword_id?: number | null
          title?: string | null
        }
        Update: {
          brief?: string | null
          content_body?: string | null
          id?: number
          status?: string
          target_keyword_id?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_content_target_keyword_id_fkey"
            columns: ["target_keyword_id"]
            isOneToOne: false
            referencedRelation: "seo_keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      methodology_versions: {
        Row: {
          id: number
          is_published: boolean
          publication_date: string
          version_name: string
        }
        Insert: {
          id?: number
          is_published?: boolean
          publication_date: string
          version_name: string
        }
        Update: {
          id?: number
          is_published?: boolean
          publication_date?: string
          version_name?: string
        }
        Relationships: []
      }
      metric_categories: {
        Row: {
          id: number
          is_active: boolean
          methodology_version_id: number
          name: string
          weight: number
        }
        Insert: {
          id?: number
          is_active?: boolean
          methodology_version_id: number
          name: string
          weight: number
        }
        Update: {
          id?: number
          is_active?: boolean
          methodology_version_id?: number
          name?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "metric_categories_methodology_version_id_fkey"
            columns: ["methodology_version_id"]
            isOneToOne: false
            referencedRelation: "methodology_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      metric_identity_tags: {
        Row: {
          metric_id: number
          tag_id: number
        }
        Insert: {
          metric_id: number
          tag_id: number
        }
        Update: {
          metric_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "metric_identity_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "identity_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      metrics: {
        Row: {
          category_id: number
          id: number
          is_active: boolean
          max_score: number
          name: string
        }
        Insert: {
          category_id: number
          id?: number
          is_active?: boolean
          max_score?: number
          name: string
        }
        Update: {
          category_id?: number
          id?: number
          is_active?: boolean
          max_score?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "metrics_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "metric_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      outreach_opportunities: {
        Row: {
          event_date: string | null
          event_url: string | null
          id: number
          name: string
          notes: string | null
          relevance_score: number | null
          status: string
          submission_deadline: string | null
          type: string
        }
        Insert: {
          event_date?: string | null
          event_url?: string | null
          id?: number
          name: string
          notes?: string | null
          relevance_score?: number | null
          status?: string
          submission_deadline?: string | null
          type: string
        }
        Update: {
          event_date?: string | null
          event_url?: string | null
          id?: number
          name?: string
          notes?: string | null
          relevance_score?: number | null
          status?: string
          submission_deadline?: string | null
          type?: string
        }
        Relationships: []
      }
      paper_authors: {
        Row: {
          author_id: number
          paper_id: number
        }
        Insert: {
          author_id: number
          paper_id: number
        }
        Update: {
          author_id?: number
          paper_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "paper_authors_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "paper_authors_paper_id_fkey"
            columns: ["paper_id"]
            isOneToOne: false
            referencedRelation: "papers"
            referencedColumns: ["id"]
          },
        ]
      }
      papers: {
        Row: {
          abstract: string | null
          created_by: number | null
          dataset_url: string | null
          doi: string | null
          id: number
          is_peer_reviewed: boolean | null
          pdf_url: string | null
          publication_date: string | null
          report_type: string | null
          status: string | null
          submission_date: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          abstract?: string | null
          created_by?: number | null
          dataset_url?: string | null
          doi?: string | null
          id?: number
          is_peer_reviewed?: boolean | null
          pdf_url?: string | null
          publication_date?: string | null
          report_type?: string | null
          status?: string | null
          submission_date?: string | null
          tags?: string[] | null
          title: string
        }
        Update: {
          abstract?: string | null
          created_by?: number | null
          dataset_url?: string | null
          doi?: string | null
          id?: number
          is_peer_reviewed?: boolean | null
          pdf_url?: string | null
          publication_date?: string | null
          report_type?: string | null
          status?: string | null
          submission_date?: string | null
          tags?: string[] | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "papers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      prompt_library: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          expected_output: string | null
          id: number
          input_variables: string[] | null
          model_compatibility: string[] | null
          name: string
          prompt_id: string
          prompt_text: string
          updated_at: string | null
          use_cases: string[] | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          expected_output?: string | null
          id?: never
          input_variables?: string[] | null
          model_compatibility?: string[] | null
          name: string
          prompt_id: string
          prompt_text: string
          updated_at?: string | null
          use_cases?: string[] | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          expected_output?: string | null
          id?: never
          input_variables?: string[] | null
          model_compatibility?: string[] | null
          name?: string
          prompt_id?: string
          prompt_text?: string
          updated_at?: string | null
          use_cases?: string[] | null
        }
        Relationships: []
      }
      queer_personas: {
        Row: {
          age: number | null
          background: Json | null
          community_engagement: Json | null
          created_at: string | null
          id: number
          identity: string | null
          location: string | null
          name: string
          occupation: string | null
          persona_id: string
          pronouns: string | null
          safety_concerns: string[] | null
          technology_usage: Json | null
          travel_patterns: Json | null
          updated_at: string | null
          use_cases: string[] | null
        }
        Insert: {
          age?: number | null
          background?: Json | null
          community_engagement?: Json | null
          created_at?: string | null
          id?: never
          identity?: string | null
          location?: string | null
          name: string
          occupation?: string | null
          persona_id: string
          pronouns?: string | null
          safety_concerns?: string[] | null
          technology_usage?: Json | null
          travel_patterns?: Json | null
          updated_at?: string | null
          use_cases?: string[] | null
        }
        Update: {
          age?: number | null
          background?: Json | null
          community_engagement?: Json | null
          created_at?: string | null
          id?: never
          identity?: string | null
          location?: string | null
          name?: string
          occupation?: string | null
          persona_id?: string
          pronouns?: string | null
          safety_concerns?: string[] | null
          technology_usage?: Json | null
          travel_patterns?: Json | null
          updated_at?: string | null
          use_cases?: string[] | null
        }
        Relationships: []
      }
      reviewers: {
        Row: {
          affiliation: string | null
          bio: string | null
          expertise_tags: string[] | null
          id: number
          name: string | null
          user_id: number | null
        }
        Insert: {
          affiliation?: string | null
          bio?: string | null
          expertise_tags?: string[] | null
          id?: number
          name?: string | null
          user_id?: number | null
        }
        Update: {
          affiliation?: string | null
          bio?: string | null
          expertise_tags?: string[] | null
          id?: number
          name?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reviewers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          blinded: boolean | null
          comments: string | null
          created_at: string | null
          id: number
          paper_id: number | null
          reviewer_id: number | null
          round: number | null
          score: number | null
          status: string | null
        }
        Insert: {
          blinded?: boolean | null
          comments?: string | null
          created_at?: string | null
          id?: number
          paper_id?: number | null
          reviewer_id?: number | null
          round?: number | null
          score?: number | null
          status?: string | null
        }
        Update: {
          blinded?: boolean | null
          comments?: string | null
          created_at?: string | null
          id?: number
          paper_id?: number | null
          reviewer_id?: number | null
          round?: number | null
          score?: number | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_paper_id_fkey"
            columns: ["paper_id"]
            isOneToOne: false
            referencedRelation: "papers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "reviewers"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_keywords: {
        Row: {
          difficulty: number | null
          id: number
          keyword: string
          search_volume: number | null
          status: string
        }
        Insert: {
          difficulty?: number | null
          id?: number
          keyword: string
          search_volume?: number | null
          status?: string
        }
        Update: {
          difficulty?: number | null
          id?: number
          keyword?: string
          search_volume?: number | null
          status?: string
        }
        Relationships: []
      }
      stakeholders: {
        Row: {
          email: string | null
          id: number
          name: string
          notes: string | null
          source: string | null
          type: string
        }
        Insert: {
          email?: string | null
          id?: number
          name: string
          notes?: string | null
          source?: string | null
          type: string
        }
        Update: {
          email?: string | null
          id?: number
          name?: string
          notes?: string | null
          source?: string | null
          type?: string
        }
        Relationships: []
      }
      tools: {
        Row: {
          api_endpoint: string | null
          category: string | null
          created_at: string | null
          description: string | null
          documentation_url: string | null
          id: number
          input_parameters: Json | null
          name: string
          output_format: Json | null
          tool_id: string
          tool_type: string | null
          updated_at: string | null
          usage_instructions: string | null
        }
        Insert: {
          api_endpoint?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          id?: never
          input_parameters?: Json | null
          name: string
          output_format?: Json | null
          tool_id: string
          tool_type?: string | null
          updated_at?: string | null
          usage_instructions?: string | null
        }
        Update: {
          api_endpoint?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          id?: never
          input_parameters?: Json | null
          name?: string
          output_format?: Json | null
          tool_id?: string
          tool_type?: string | null
          updated_at?: string | null
          usage_instructions?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          full_name: string | null
          id: string
          username: string | null
        }
        Insert: {
          full_name?: string | null
          id: string
          username?: string | null
        }
        Update: {
          full_name?: string | null
          id?: string
          username?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: number
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          id?: number
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          id?: number
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          first_name: string | null
          id: number
          last_name: string | null
          role: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          role?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_country_score: {
        Args: {
          p_country_id: number
          p_methodology_version_id: number
          p_report_year: number
        }
        Returns: number
      }
      check_user_role: {
        Args: { p_role: Database["public"]["Enums"]["user_role"] }
        Returns: boolean
      }
      get_annual_report_for_year: {
        Args: { report_year_param: number }
        Returns: Json
      }
      match_documents: {
        Args: {
          match_count: number
          match_threshold: number
          query_embedding: string
        }
        Returns: {
          content: string
          id: number
          similarity: number
        }[]
      }
    }
    Enums: {
      user_role: "admin" | "editor" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["admin", "editor", "viewer"],
    },
  },
} as const
